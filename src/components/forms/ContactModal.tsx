'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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
    // Handle form submission (UI only for now)
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
      <div className="w-full max-w-3xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <span className="font-poppins text-xs font-medium uppercase tracking-widest text-orange-500">
              Get in Touch
            </span>
            <h2
              id="contact-modal-title"
              className="mt-2 font-poppins text-2xl font-medium text-gray-900 md:text-3xl"
            >
              Schedule a Consultation
            </h2>
            <p className="mt-2 font-poppins text-sm text-gray-600">
              Let&apos;s discuss how we can help transform your business
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
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
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Company name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="time"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="brief"
                className="mb-2 block font-poppins text-sm font-medium text-gray-700"
              >
                Brief Description
              </label>
              <textarea
                id="brief"
                name="brief"
                rows={4}
                value={formData.brief}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-poppins text-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                placeholder="Tell us about your project or requirements..."
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-orange-500 px-6 py-3 font-poppins text-base font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Submit Request
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-6 py-3 font-poppins text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

