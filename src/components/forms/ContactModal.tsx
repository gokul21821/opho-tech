'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '@/components/ui/Modal';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LinkedInIcon = () => (
  <svg
    aria-hidden="true"
    className="size-8"
    fill="none"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#FFF6ED" />
    <path
      d="M22.22 22.22h-2.22V17.6c0-.89-.38-1.44-1.24-1.44-.67 0-1.11.45-1.28.99-.07.14-.08.33-.08.53v4.54h-2.22c.03-5.56.01-6.11 0-6.58h2.22v.89c.23-.38.82-.95 1.91-.95 1.4 0 2.46.97 2.46 3.1v3.54ZM10.78 10.78a1.3 1.3 0 0 1-1.31-1.31c0-.6.48-1.31 1.31-1.31.56 0 1.01.45 1.01 1.31 0 .6-.45 1.31-1.01 1.31Zm1.1 11.44H9.66v-6.58h2.22v6.58Z"
      fill="#E45412"
    />
  </svg>
);

const XIcon = () => (
  <svg
    aria-hidden="true"
    className="size-8"
    fill="none"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="white" />
    <path
      d="M20.5 11.5l-5.5 6.5-5.5-6.5M20.5 20.5l-5.5-6.5-5.5 6.5"
      stroke="#111111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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

const CTA_BACKGROUND = "/images/hero/hero-background-waves.png";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    date: '',
    time: '',
    brief: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
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
      <div className="flex w-full overflow-hidden rounded-2xl border-[1.5px] border-orange-400 bg-white">
        {/* Left Side - Dark Background */}
        <div className="relative hidden w-[475px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-l-2xl bg-gradient-to-r from-[#1e2f62] via-[#1b2760] to-[#101b3f] p-8 lg:flex">
          {/* Background Image */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <Image
              src={CTA_BACKGROUND}
              alt=""
              fill
              sizes="475px"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#141f44]/90 via-[#152752]/70 to-[#15224a]/60" />

          <div className="relative z-10 flex flex-col gap-5">
            {/* Header Section */}
            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-5">
              <p className="font-poppins text-xl font-medium capitalize leading-tight text-orange-500">
                Book a Call
              </p>
              <h2
                id="contact-modal-title"
                className="font-poppins text-2xl font-medium leading-tight text-white"
              >
                From Idea to Impact in 15 Days
              </h2>
              <p className="font-poppins text-sm leading-normal text-gray-50">
                Join our AI solution architects for a discovery session that transforms your vision into a tangible, business-ready MVP.
              </p>
            </div>

            {/* Global Offices */}
            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-5">
              <p className="font-poppins text-base font-medium capitalize text-gray-25">
                Global Offices
              </p>
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-5">
              <p className="font-poppins text-base font-medium capitalize text-gray-25">
                Contact Information
              </p>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <a
                  href="mailto:info@ophotech.com"
                  className="font-poppins text-base text-orange-500 transition-colors hover:text-orange-400"
                >
                  info@ophotech.com
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
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

        {/* Right Side - Form */}
        <div className="relative flex w-full flex-col bg-white p-5 lg:w-[420px] lg:flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 lg:size-10"
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

          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2.5">
            {/* Name */}
            <div className="flex flex-col gap-1">
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
                className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Enter your name"
              />
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-1">
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
                className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Enter your organization name"
              />
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
                className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                className="h-[70px] resize-none rounded-md bg-gray-100 px-3 py-2 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Enter your message"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="country"
                className="font-poppins text-sm text-gray-900"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
                <option value="other">Other</option>
              </select>
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
                  className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  htmlFor="time"
                  className="font-poppins text-sm text-gray-900 opacity-0"
                >
                  Preferred Time Slot
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="rounded-md bg-gray-100 px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-orange-500 px-3 py-3 font-poppins text-base text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span>Submit Now</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

