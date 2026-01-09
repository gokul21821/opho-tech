'use client';

import Image from 'next/image';
import BackgroundDots from '@/components/ui/background';

type SuccessPopupProps = {
  onClose: () => void;
};

export function SuccessPopup({ onClose }: SuccessPopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[20px] bg-white shadow-lg">
        <BackgroundDots className="flex flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-10 text-center"  spacing={20} dotColor="#D9D9D9" backgroundColor="#FEECD6">
          <div className="mb-5 flex justify-center sm:mb-6">
            <Image
              src="/images/icons/icon-calendar.svg"
              alt="Success"
              width={100}
              height={100}
              className="h-20 w-20 sm:h-24 sm:w-24"
            />
          </div>

          <h2 className="mb-3 font-poppins text-lg font-medium leading-tight text-black sm:text-xl md:text-2xl">
            Your Discovery Call Is Successfully Booked!
          </h2>

          <p className="mb-4 w-full font-poppins text-sm leading-relaxed text-[#454545] sm:text-base">
            Thank you for scheduling a session with our Experts. We&apos;re excited to explore your idea and help transform it into a business-ready MVP.
          </p>

          <p className="mb-6 font-poppins text-xs text-[#111111] sm:text-sm">
            Note: Your meeting link have been sent to your registered email.
          </p>

          <div className="flex justify-center w-full">
            <button
              onClick={onClose}
              className="group flex w-fit items-center gap-2 rounded-lg bg-[#FFF6ED] px-5 py-2.5 transition-all hover:bg-[#FFE8D1]"
            >
              <span className="font-poppins text-sm font-medium leading-none text-[#E45412] sm:text-base">
                Back to Home Page
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 8H11M11 8L8 5M11 8L8 11"
                  stroke="#E45412"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </BackgroundDots>
      </div>
    </div>
  );
}