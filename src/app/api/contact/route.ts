import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to convert 24-hour time to 12-hour format with AM/PM
const formatTime12Hour = (time24: string): string => {
  if (!time24 || time24 === '--:--') return '--:--';
  
  const [hours, minutes] = time24.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));

  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.organization || !data.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format time slot (combine startTime and endTime with 12-hour format)
    const timeSlot = data.startTime && data.endTime 
      ? `${formatTime12Hour(data.startTime)} - ${formatTime12Hour(data.endTime)}` 
      : data.startTime 
      ? formatTime12Hour(data.startTime)
      : data.endTime
      ? formatTime12Hour(data.endTime)
      : 'Not specified';

    // 1. Send Email to Admin
    // Uses 'admin@ophotech.com' as sender
    const adminEmail = await resend.emails.send({
      from: 'admin@ophotech.com',
      to: process.env.ADMIN_EMAIL || 'john@doe.com',
      subject: `New Inquiry from ${data.name}`,
      template: {
        id: 'admin-1', // Admin template ID from Resend Dashboard
        variables: {
          NAME: data.name,
          ORGANIZATION: data.organization,
          EMAIL: data.email,
          PHONE: data.phone || 'Not provided',
          COUNTRY: data.country || 'Not specified',
          DATE: data.date || 'Not specified',
          TIME: timeSlot,
          BRIEF: data.brief || 'No message provided',
        },
      },
    });

    // 2. Send Email to Lead (User)
    // Uses 'noreply@ophotech.com' as sender
    const userEmail = await resend.emails.send({
      from: 'noreply@ophotech.com',
      to: data.email,
      subject: 'Thank you for your inquiry',
      template: {
        id: 'lead', // Lead template ID from Resend Dashboard
        variables: {
          NAME: data.name,
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

