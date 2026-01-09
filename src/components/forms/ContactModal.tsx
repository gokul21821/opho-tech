'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { CloseIcon, UploadIcon } from './ContactIcons';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { TimePicker } from './TimePicker';
import { PhoneInputWrapper } from './PhoneInputWrapper';
import { COUNTRIES, ROLES, INDUSTRIES, CTA_BACKGROUND } from '@/lib/constants';
import { isEndTimeValid } from '@/lib/date-utils';

import { SuccessPopup } from './SuccessPopup';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    industry: '',
    email: '',
    phone: '',
    country: '',
    date: '',
    startTime: '',
    startPeriod: 'AM',
    endTime: '',
    endPeriod: 'AM',
    brief: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");

  const handleTimeSelect = (type: 'start' | 'end', field: 'time' | 'period', value: string) => {
    const newFormData = {
      ...formData,
      [type === 'start' ? (field === 'time' ? 'startTime' : 'startPeriod') : (field === 'time' ? 'endTime' : 'endPeriod')]: value,
    };

    // Validate that end time is after start time
    if (type === 'end' && field === 'time' && newFormData.startTime && newFormData.startPeriod) {
      if (!isEndTimeValid(newFormData.startTime, newFormData.startPeriod, value, newFormData.endPeriod)) {
        return;
      }
    }

    if (type === 'end' && field === 'period' && newFormData.startTime && newFormData.startPeriod && newFormData.endTime) {
      if (!isEndTimeValid(newFormData.startTime, newFormData.startPeriod, newFormData.endTime, value)) {
        return;
      }
    }

    if ((type === 'start' && field === 'time') || (type === 'start' && field === 'period')) {
      if (newFormData.endTime && newFormData.endPeriod) {
        if (!isEndTimeValid(newFormData.startTime, newFormData.startPeriod, newFormData.endTime, newFormData.endPeriod)) {
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

    const formDataToSend = new FormData();

    // Append all form fields
    formDataToSend.append("name", formData.name);
    formDataToSend.append("organization", formData.organization);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("industry", formData.industry);
    formDataToSend.append("phone", formData.phone || '');
    formDataToSend.append("country", formData.country);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("startTime", formData.startTime);
    formDataToSend.append("startPeriod", formData.startPeriod);
    formDataToSend.append("endTime", formData.endTime);
    formDataToSend.append("endPeriod", formData.endPeriod);
    formDataToSend.append("brief", formData.brief);
    formDataToSend.append("consent", formData.consent.toString());

    // Append file if it exists
    if (file) {
      formDataToSend.append("file", file);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend, // No headers needed, browser sets multipart/form-data automatically
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // No auto-close, show popup instead
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal open={isOpen} onClose={onClose} labelledBy="contact-modal-title">
      {submitStatus === 'success' ? (
        <SuccessPopup onClose={onClose} />
      ) : (
        <div className="relative flex max-h-[98vh] w-full max-w-[1200px] flex-col rounded-2xl border border-orange-400  lg:p-5">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={CTA_BACKGROUND}
            alt=""
            fill
            sizes="(max-width: 1024px) 95vw, 1200px"
            className="object-cover rounded-2xl"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-1 top-1 z-20 flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 lg:right-1 lg:top-1 lg:size-7"
        >
          <CloseIcon />
        </button>

        <div className="relative z-10 mb-6 mt-4 lg:mt-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col ">
                <p className="font-poppins text-[28px] font-medium capitalize leading-[38px] text-orange-500">
                  Book A Call
                </p>
                <h2
                  id="contact-modal-title"
                  className="font-poppins text-[25px] font-medium leading-[14px] text-white"
                >
                  From Idea To Impact
                </h2>
              </div>
              <p className="font-poppins text-base leading-normal text-gray-50 max-w-lg">
                Join our AI solution architects for a discovery session that transforms your vision into a tangible, business-ready MVP.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full">
          <div className="rounded-[12px] bg-white p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-poppins text-sm text-gray-900">Name</label>
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

                  <CustomSelect
                    label="Role"
                    id="role"
                    value={formData.role}
                    options={ROLES}
                    placeholder="Enter your role"
                    onChange={(val) => setFormData(prev => ({ ...prev, role: val }))}
                  />

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-poppins text-sm text-gray-900">Work E-Mail</label>
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
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="organization" className="font-poppins text-sm text-gray-900">Organization Name</label>
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

                  <CustomSelect
                    label="Industry"
                    id="industry"
                    value={formData.industry}
                    options={INDUSTRIES}
                    placeholder="Enter your Industry"
                    onChange={(val) => setFormData(prev => ({ ...prev, industry: val }))}
                  />

                  <PhoneInputWrapper
                    value={formData.phone}
                    onChange={(val) => setFormData(prev => ({ ...prev, phone: val }))}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="brief" className="font-poppins text-sm text-gray-900">Share a Brief</label>
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

              <div className="flex gap-3">
                <div className="flex-1">
                  <CustomSelect
                    label="Country"
                    id="country"
                    value={formData.country}
                    options={COUNTRIES}
                    placeholder="Select country"
                    onChange={(val) => setFormData(prev => ({ ...prev, country: val }))}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-1">
                  <label htmlFor="date" className="font-poppins text-sm text-gray-900">Preferred Time Slot</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <TimePicker
                  startTime={formData.startTime}
                  startPeriod={formData.startPeriod}
                  endTime={formData.endTime}
                  endPeriod={formData.endPeriod}
                  onTimeSelect={handleTimeSelect}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="file-upload" className="font-poppins text-sm text-gray-900">
                  Upload File (PDF/Image, max 10MB)
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) {
                      if (selectedFile.size > 10 * 1024 * 1024) {
                        setFileError("File size exceeds 10MB limit.");
                        setFile(null);
                      } else {
                        setFileError("");
                        setFile(selectedFile);
                      }
                    }
                  }}
                  className="rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
                {fileError && <p className="text-red-500 text-xs">{fileError}</p>}
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                    required
                    className="mt-1 size-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="consent" className="font-poppins text-xs text-gray-900">
                    I consent to the collection and processing of my personal data. I understand this information will only be used to respond to my inquiry.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.consent}
                  className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-3 py-2 font-poppins text-sm text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit Now'}</span>
                  {!isSubmitting && (
                    <Image src="/right-arrow.svg" alt="arrow" width={16} height={16} />
                  )}
                </button>
              </div>

              {submitStatus === 'error' && (
                <p className="font-poppins text-sm text-red-600">✗ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
        </div>
      )}
    </Modal>
  );
}
