'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@/components/forms/ContactIcons';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  id: string;
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const CustomSelect = ({
  label,
  id,
  value,
  options,
  placeholder,
  onChange,
  required = false
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={selectRef} className="relative flex flex-col gap-1">
      <label htmlFor={id} className="font-poppins text-sm text-gray-900">
        {label}
      </label>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
      >
        <span className={!value ? "text-gray-300" : ""}>
          {value || placeholder || `Select ${label}`}
        </span>
        <ChevronDownIcon
          className={`size-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-0 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="flex flex-col p-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.label);
                  setIsOpen(false);
                }}
                className={`rounded-md px-3 py-2.5 text-left font-poppins text-xs transition-colors ${
                  value === option.label
                    ? 'bg-orange-500 text-white'
                    : 'bg-[#f0f0f0] text-gray-900 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

