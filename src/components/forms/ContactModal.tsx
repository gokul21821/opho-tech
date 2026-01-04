'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '@/components/ui/Modal';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LinkedInIcon = () => (
  <Image
    src="/images/icons/linkedin.svg"
    alt="LinkedIn"
    width={32}
    height={32}
    className="size-8"
  />
);

const XIcon = () => (
  <Image
    src="/images/icons/X.svg"
    alt="X"
    width={32}
    height={32}
    className="size-8"
  />
);

const EmailIcon = () => (
  <svg
    aria-hidden="true"
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="#FFF6ED"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="#FFF6ED"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.31917 2.05347C5.31917 1.88778 5.18485 1.75347 5.01917 1.75347C4.85348 1.75347 4.71917 1.88778 4.71917 2.05347H5.01917H5.31917ZM5.01917 5.27262H4.71917C4.71917 5.37067 4.76708 5.46253 4.84749 5.51864L5.01917 5.27262ZM7.08775 7.08196C7.22362 7.17677 7.41063 7.14349 7.50545 7.00761C7.60026 6.87174 7.56698 6.68473 7.43111 6.58991L7.25943 6.83594L7.08775 7.08196ZM9.26101 4.99989H8.96101C8.96101 7.18769 7.18745 8.96125 4.99965 8.96125V9.26125V9.56125C7.51882 9.56125 9.56101 7.51906 9.56101 4.99989H9.26101ZM4.99965 9.26125V8.96125C2.81184 8.96125 1.03828 7.18769 1.03828 4.99989H0.738281H0.438281C0.438281 7.51906 2.48047 9.56125 4.99965 9.56125V9.26125ZM0.738281 4.99989H1.03828C1.03828 2.81209 2.81184 1.03853 4.99965 1.03853V0.738525V0.438525C2.48047 0.438525 0.438281 2.48072 0.438281 4.99989H0.738281ZM4.99965 0.738525V1.03853C7.18745 1.03853 8.96101 2.81209 8.96101 4.99989H9.26101H9.56101C9.56101 2.48072 7.51882 0.438525 4.99965 0.438525V0.738525ZM5.01917 2.05347H4.71917V5.27262H5.01917H5.31917V2.05347H5.01917ZM5.01917 5.27262L4.84749 5.51864L7.08775 7.08196L7.25943 6.83594L7.43111 6.58991L5.19085 5.0266L5.01917 5.27262Z" fill="currentColor"/>
  </svg>
);

// Generate time slots from 12:00 to 11:30 (24 options instead of 48)
const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => {
  const hour = i < 2 ? 12 : Math.floor(i / 2); // 12, 12, 1, 1, 2, 2, ..., 11, 11
  const minute = i % 2 === 0 ? '00' : '30';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour.toString().padStart(2, '0')}:${minute}`;
});

// Helper function to convert time + period to 24-hour format
const convertTo24Hour = (time12: string, period: string): string => {
  if (!time12) return '';

  const [hourStr, minute] = time12.split(':');
  let hour = parseInt(hourStr);

  // Convert to 24-hour format
  if (period === 'AM') {
    if (hour === 12) hour = 0; // 12 AM is 00
  } else { // PM
    if (hour !== 12) hour += 12; // Add 12 for PM (except 12 PM which stays 12)
  }

  return `${hour.toString().padStart(2, '0')}:${minute}`;
};

// Helper function to convert 24-hour time to 12-hour format with AM/PM
const formatTime12Hour = (time24: string): string => {
  if (!time24 || time24 === '--:--') return '--:--';

  // Create a dummy date to use the native Intl formatter
  const [hours, minutes] = time24.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));

  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

// Helper function to compare times for validation
const isEndTimeValid = (startTime24: string, startPeriod: string, endTime24: string, endPeriod: string): boolean => {
  if (!startTime24 || !endTime24) return true;

  const start24 = convertTo24Hour(startTime24, startPeriod);
  const end24 = convertTo24Hour(endTime24, endPeriod);

  const [startHour, startMin] = start24.split(':').map(Number);
  const [endHour, endMin] = end24.split(':').map(Number);

  const startMinutes = startHour * 60 + startMin;
  const endMinutes = endHour * 60 + endMin;

  return endMinutes > startMinutes;
};

const COUNTRIES = [
  { value: 'CA', label: 'Canada' },
  { value: 'US', label: 'US' },
  { value: 'UK', label: 'UK' },
  { value: 'IN', label: 'India' },
  { value: 'ES', label: 'Spain' },
];

const CTA_BACKGROUND = "/images/hero/hero-background-waves.png";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    date: '',
    startTime: '',
    startPeriod: 'AM',
    endTime: '',
    endPeriod: 'AM',
    brief: '',
  });

  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const timePickerRef = useRef<HTMLDivElement>(null);
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false);
  const countryPickerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Close time picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isTimePickerOpen &&
        timePickerRef.current &&
        !timePickerRef.current.contains(event.target as Node)
      ) {
        setIsTimePickerOpen(false);
      }
    };

    if (isTimePickerOpen) {
      // Use setTimeout to ensure the event listener is added after the current click event
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTimePickerOpen]);

  // Close country picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCountryPickerOpen &&
        countryPickerRef.current &&
        !countryPickerRef.current.contains(event.target as Node)
      ) {
        setIsCountryPickerOpen(false);
      }
    };

    if (isCountryPickerOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCountryPickerOpen]);

  const handleTimeSelect = (type: 'start' | 'end', field: 'time' | 'period', value: string) => {
    const newFormData = {
      ...formData,
      [type === 'start' ? (field === 'time' ? 'startTime' : 'startPeriod') : (field === 'time' ? 'endTime' : 'endPeriod')]: value,
    };

    // Validate that end time is after start time
    if (type === 'end' && field === 'time' && newFormData.startTime && newFormData.startPeriod) {
      if (!isEndTimeValid(newFormData.startTime, newFormData.startPeriod, value, newFormData.endPeriod)) {
        // Don't update if end time is before start time
        return;
      }
    }

    if (type === 'end' && field === 'period' && newFormData.startTime && newFormData.startPeriod && newFormData.endTime) {
      if (!isEndTimeValid(newFormData.startTime, newFormData.startPeriod, newFormData.endTime, value)) {
        // Don't update if end time is before start time
        return;
      }
    }

    if ((type === 'start' && field === 'time') || (type === 'start' && field === 'period')) {
      // Check if new start time makes current end time invalid
      if (newFormData.endTime && newFormData.endPeriod) {
        if (!isEndTimeValid(newFormData.startTime, newFormData.startPeriod, newFormData.endTime, newFormData.endPeriod)) {
          // Clear end time if new start time/period is after current end time
          newFormData.endTime = '';
          newFormData.endPeriod = 'AM';
        }
      }
    }

    setFormData(newFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Optional: Reset form after successful submission
        // setFormData({ name: '', organization: '', email: '', phone: '', country: '', date: '', startTime: '', startPeriod: 'AM', endTime: '', endPeriod: 'AM', brief: '' });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', result.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal open={isOpen} onClose={onClose} labelledBy="contact-modal-title">
      <div className="relative flex max-h-[98vh] w-full max-w-[1200px] flex-col  border border-orange-400 lg:max-w-[1200px] lg:flex-row lg:gap-10 lg:p-10">
        {/* Background Image for entire modal */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={CTA_BACKGROUND}
            alt=""
            fill
            sizes="(max-width: 1024px) 95vw, 895px"
            className="object-cover"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-1 top-1 z-20 flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 lg:right-1 lg:top-1 lg:size-7"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M15 5L5 15M5 5l10 10"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Left Side */}
        <div className="relative hidden w-full flex-shrink-0 flex-col justify-between overflow-hidden rounded-l-2xl lg:flex lg:w-[475px]">
          <div className="relative z-10 flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-0">
                <p className="font-poppins text-2xl font-medium capitalize leading-[26px] mt-4 text-orange-500">
                  Book a Call
                </p>
                <h2
                  id="contact-modal-title"
                  className="font-poppins text-[28px] font-medium leading-[38px] text-white"
                >
                  From Idea to Impact in 15 Days
                </h2>
              </div>
              <p className="font-poppins text-base leading-normal text-gray-50">
                Join our AI solution architects for a discovery session that transforms your vision into a tangible, business-ready MVP.
              </p>
              {/* Orange Line */}
              <div className="w-full mb-6">
                <Image
                  src="/images/horizontalline.svg"
                  alt=""
                  width={1200}
                  height={3}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Global Offices */}
            <div className="flex flex-col gap-6 pt-6">
              <p className="font-poppins text-lg font-medium capitalize text-gray-25">
                Global Offices
              </p>
              <div className="flex flex-wrap gap-[12px]">
                {['Canada', 'USA', 'India', 'Europe'].map((office) => (
                  <div
                    key={office}
                    className="rounded-lg bg-gray-25 px-2.5 py-1.5"
                  >
                    <p className="font-poppins text-sm text-gray-900">
                      {office}
                    </p>
                  </div>
                ))}
              </div>
              {/* Orange Line */}
              <div className="w-full mb-6">
                <Image
                  src="/images/horizontalline.svg"
                  alt=""
                  width={1200}
                  height={3}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-6 pt-6">
              <p className="font-poppins text-lg font-medium capitalize text-gray-25">
                Contact Information
              </p>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <a
                  href="mailto:info@ophotech.com"
                  className="font-poppins text-lg text-orange-500 transition-colors hover:text-orange-400"
                >
                  info@ophotech.com
                </a>
              </div>
            </div>
            <div className="w-full -mb-1">
                <Image
                  src="/images/horizontalline.svg"
                  alt=""
                  width={1200}
                  height={3}
                  className="w-full h-auto"
                />
              </div>
          </div>
          
          {/* Social Media Icons - Bottom Left */}
          <div className="relative z-10 mt-auto pt-6 overflow-hidden">
            <div className="flex gap-3 pl-2 lg:pl-0">
              <Link
                href="https://www.linkedin.com/company/ophotech/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit OphoTech on LinkedIn"
                className="transition-transform hover:scale-105"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://x.com/opho_tech"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit OphoTech on X"
                className="transition-transform hover:scale-105"
              >
                <XIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Form Card */}
        <div className="relative flex w-full flex-col lg:w-[420px] lg:flex-shrink-0">
          <div className="rounded-[12px] bg-white p-5 h-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-poppins text-sm text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="organization"
                  className="font-poppins text-sm text-gray-900"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                  placeholder="Enter your organization name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-poppins text-sm text-gray-900"
              >
                Work E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="font-poppins text-sm text-gray-900"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Brief */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="brief"
                className="font-poppins text-sm text-gray-900"
              >
                Share a Brief
              </label>
              <textarea
                id="brief"
                name="brief"
                rows={3}
                value={formData.brief}
                onChange={handleChange}
                className="h-[70px] resize-none rounded-md bg-[#f0f0f0] px-3 py-2 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Enter your message"
              />
            </div>

            {/* Country */}
            <div ref={countryPickerRef} className="relative flex flex-col gap-1">
              <label
                htmlFor="country"
                className="font-poppins text-sm text-gray-900"
              >
                Country
              </label>
              <button
                type="button"
                id="country"
                onClick={() => setIsCountryPickerOpen(!isCountryPickerOpen)}
                className="flex w-full items-center justify-between rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                <span className={!formData.country ? "text-gray-300" : ""}>
                  {formData.country || 'Select country'}
                </span>
                <svg
                  className={`size-4 text-gray-500 transition-transform ${isCountryPickerOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCountryPickerOpen && (
                <div className="absolute top-full left-0 z-50 mt-0 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                  <div className="flex flex-col p-1">
                    {COUNTRIES.map((country) => (
                      <button
                        key={country.value}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            country: country.label,
                          }));
                          setIsCountryPickerOpen(false);
                        }}
                        className={`rounded-md px-3 py-2.5 text-left font-poppins text-xs transition-colors ${
                          formData.country === country.label
                            ? 'bg-orange-500 text-white'
                            : 'bg-[#f0f0f0] text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {country.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Date and Time */}
            <div className="flex gap-3">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  htmlFor="date"
                  className="font-poppins text-sm text-gray-900"
                >
                  Preferred Time Slot
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div ref={timePickerRef} className="relative flex flex-1 flex-col gap-1">
                <label
                  className="font-poppins text-sm text-gray-900 opacity-0"
                >
                  Preferred Time Slot
                </label>
                <button
                  type="button"
                  onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                  className="flex w-full items-center justify-between rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                >
                  <span className={!formData.startTime && !formData.endTime ? "text-gray-300" : ""}>
                    {formData.startTime || formData.endTime
                      ? (() => {
                          const start24 = formData.startTime ? convertTo24Hour(formData.startTime, formData.startPeriod) : '';
                          const end24 = formData.endTime ? convertTo24Hour(formData.endTime, formData.endPeriod) : '';
                          return `${formatTime12Hour(start24 || '--:--')} - ${formatTime12Hour(end24 || '--:--')}`;
                        })()
                      : 'Select Time'}
                  </span>
                  <ClockIcon className="size-4 text-gray-500" />
                </button>

                {isTimePickerOpen && (
                  <div className="absolute bottom-full -left-10 z-50 -mb-5 flex w-[180%] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg sm:flex-row">
                    {/* Start Time Column */}
                    <div className="flex flex-1 flex-col border-b border-gray-100 sm:border-b-0 sm:border-r">
                      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
                        <ClockIcon className="size-3 text-gray-500" />
                        <span className="font-poppins text-xs font-medium text-gray-700">Start Time</span>
                      </div>
                      {/* Time Slots */}
                      <div className="max-h-[150px] overflow-y-auto p-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={`start-time-${time}`}
                            type="button"
                            onClick={() => handleTimeSelect('start', 'time', time)}
                            className={`w-full rounded px-2 py-1.5 text-left font-poppins text-xs transition-colors ${
                              formData.startTime === time
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-900 hover:bg-gray-100'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      {/* AM/PM Toggle */}
                      <div className="flex border-t border-gray-100">
                        {['AM', 'PM'].map((period) => (
                          <button
                            key={`start-period-${period}`}
                            type="button"
                            onClick={() => handleTimeSelect('start', 'period', period)}
                            className={`flex-1 px-2 py-2 text-center font-poppins text-xs transition-colors ${
                              formData.startPeriod === period
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* End Time Column */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
                        <ClockIcon className="size-3 text-gray-500" />
                        <span className="font-poppins text-xs font-medium text-gray-700">End Time</span>
                      </div>
                      {/* Time Slots */}
                      <div className="max-h-[150px] overflow-y-auto p-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600">
                        {TIME_SLOTS.map((time) => {
                          const isDisabled = !!(formData.startTime && formData.startPeriod && !isEndTimeValid(formData.startTime, formData.startPeriod, time, formData.endPeriod));
                          return (
                            <button
                              key={`end-time-${time}`}
                              type="button"
                              onClick={() => handleTimeSelect('end', 'time', time)}
                              disabled={isDisabled}
                              className={`w-full rounded px-2 py-1.5 text-left font-poppins text-xs transition-colors ${
                                formData.endTime === time
                                  ? 'bg-orange-500 text-white'
                                  : isDisabled
                                  ? 'text-gray-400 cursor-not-allowed'
                                  : 'text-gray-900 hover:bg-gray-100'
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                      {/* AM/PM Toggle */}
                      <div className="flex border-t border-gray-100">
                        {['AM', 'PM'].map((period) => {
                          const isDisabled = !!(formData.startTime && formData.startPeriod && formData.endTime && !isEndTimeValid(formData.startTime, formData.startPeriod, formData.endTime, period));
                          return (
                            <button
                              key={`end-period-${period}`}
                              type="button"
                              onClick={() => handleTimeSelect('end', 'period', period)}
                              disabled={isDisabled}
                              className={`flex-1 px-2 py-2 text-center font-poppins text-xs transition-colors ${
                                formData.endPeriod === period
                                  ? 'bg-orange-500 text-white'
                                  : isDisabled
                                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {period}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-fit items-center justify-start gap-1.5 rounded-lg bg-orange-500 px-3 py-2 font-poppins text-sm text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit Now'}</span>
                {!isSubmitting && (
                  <img
                    src="/right-arrow.svg"
                    alt="arrow"
                    width="16"
                    height="16"
                  />
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="font-poppins text-sm text-green-600">
                  ✓ Details sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="font-poppins text-sm text-red-600">
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

