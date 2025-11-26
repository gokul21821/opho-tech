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
                className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                  className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                  className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-fit items-center justify-start gap-1.5 rounded-lg bg-orange-500 px-3 py-2 font-poppins text-sm text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
      </div>
    </Modal>
  );
}

