import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { convertTo24Hour, formatTime12Hour } from '@/lib/date-utils';
import { fileTypeFromBuffer } from 'file-type';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Parse FormData instead of JSON
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;
    const role = formData.get("role") as string;
    const industry = formData.get("industry") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const date = formData.get("date") as string;
    const startTime = formData.get("startTime") as string;
    const startPeriod = formData.get("startPeriod") as string;
    const endTime = formData.get("endTime") as string;
    const endPeriod = formData.get("endPeriod") as string;
    const brief = formData.get("brief") as string;
    const file = formData.get("file") as File | null;

    // 2. Validate Required Fields
    if (!name || !email || !organization) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Process File & Security Check
    const attachments = [];
    let fileNameForTemplate = "None";

    if (file && file.size > 0) {
      // Check 1: Size Limit (Server-side backup)
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "File exceeds 10MB limit" }, { status: 400 });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Check 2: Magic Number Verification (Security)
      const type = await fileTypeFromBuffer(buffer);
      const allowedMimes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];

      if (!type || !allowedMimes.includes(type.mime)) {
        return NextResponse.json({ error: "Invalid file type. Only PDF and Images allowed." }, { status: 400 });
      }

      // If valid, prepare for Resend
      attachments.push({
        filename: file.name,
        content: buffer,
      });
      fileNameForTemplate = file.name;
    }

    // 4. Format time slot (combine startTime and endTime with 12-hour format)
    const startTime24 = startTime && startPeriod
      ? convertTo24Hour(startTime, startPeriod)
      : '';
    const endTime24 = endTime && endPeriod
      ? convertTo24Hour(endTime, endPeriod)
      : '';

    const timeSlot = startTime24 && endTime24
      ? `${formatTime12Hour(startTime24)} - ${formatTime12Hour(endTime24)}`
      : startTime24
      ? formatTime12Hour(startTime24)
      : endTime24
      ? formatTime12Hour(endTime24)
      : 'Not specified';

    // 5. Send Admin Email
    const adminEmail = await resend.emails.send({
      from: 'info@ophotech.com',
      to: process.env.ADMIN_EMAIL || 'john@doe.com',
      subject: `New Inquiry from ${name}`,
      attachments: attachments, // <--- Attach the secure file
      template: {
        id: 'admin-1', // Admin template ID from Resend Dashboard
        variables: {
          NAME: name,
          ORGANIZATION: organization,
          ROLE: role || 'Not specified',
          INDUSTRY: industry || 'Not specified',
          WORK_EMAIL: email,
          PHONE: phone || 'Not provided',
          COUNTRY: country || 'Not specified',
          DATE: date || 'Not specified',
          TIME: timeSlot,
          BRIEF: brief || 'No message provided',
          FILE_NAME: fileNameForTemplate, // <--- New Variable for template
        },
      },
    });

    // 6. Send Email to Lead (User)
    const userEmail = await resend.emails.send({
      from: 'noreply@ophotech.com',
      to: email,
      subject: 'Thank you for your inquiry',
      template: {
        id: 'lead', // Lead template ID from Resend Dashboard
        variables: {
          NAME: name,
        },
      },
    });

    if (adminEmail.error || userEmail.error) {
      console.error('Resend Error:', adminEmail.error || userEmail.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
