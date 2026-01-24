'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const updateMenuPosition = () => {
      const el = inputRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      const padding = 8;
      const gap = 4;
      const desiredMaxHeight = 192; // matches max-h-48
      const spaceBelow = window.innerHeight - rect.bottom - padding;
      const spaceAbove = rect.top - padding;
      const shouldOpenUp = spaceBelow < desiredMaxHeight && spaceAbove > spaceBelow;

      const width = rect.width;
      const maxLeft = window.innerWidth - width - padding;
      const left = Math.max(padding, Math.min(rect.left, maxLeft));

      setMenuStyle(
        shouldOpenUp
          ? { position: 'fixed', left, bottom: window.innerHeight - rect.top + gap, width, zIndex: 9999 }
          : { position: 'fixed', left, top: rect.bottom + gap, width, zIndex: 9999 }
      );
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideSelect = !!(selectRef.current && selectRef.current.contains(target));
      const clickedInsideMenu = !!(menuRef.current && menuRef.current.contains(target));
      if (!clickedInsideSelect && !clickedInsideMenu) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        inputRef.current?.focus();
        updateMenuPosition();
      }, 0);

      // Keep menu pinned to the input even when scrolling inside the modal.
      window.addEventListener('resize', updateMenuPosition);
      window.addEventListener('scroll', updateMenuPosition, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition, true);
    };
  }, [isOpen]);

  // Clear menu style when dropdown closes
  useEffect(() => {
    if (!isOpen && menuStyle !== null) {
      const timeoutId = setTimeout(() => {
        setMenuStyle(null);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, menuStyle]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={selectRef} className="relative flex flex-col gap-1">
      <label htmlFor={id} className="font-poppins text-sm text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          name={id}
          required={required}
          type="text"
          value={isOpen ? searchTerm : value}
          placeholder={placeholder || `Select ${label}`}
          readOnly={!isOpen}
          onClick={() => setIsOpen(true)}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            // Prevent Enter from submitting the parent form while searching.
            if (e.key === 'Enter') e.preventDefault();
            if (e.key === 'Escape') {
              e.preventDefault();
              setIsOpen(false);
            }
          }}
          className={`w-full rounded-md bg-[#f0f0f0] px-3 py-2.5 pr-9 font-poppins text-xs text-gray-900 placeholder:text-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100 ${
            !isOpen && !value ? 'text-gray-300' : ''
          }`}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`${id}-listbox`}
          aria-autocomplete="list"
        />
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <ChevronDownIcon
            className={`size-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {isOpen &&
        menuStyle &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={menuRef}
            style={menuStyle}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            {/* Options list with fixed height and scrollbar */}
            <div
              id={`${id}-listbox`}
              className="flex flex-col max-h-48 overflow-y-auto p-1"
              aria-label={label}
            >
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 font-poppins text-xs text-gray-500">No results</div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.label);
                      setIsOpen(false);
                    }}
                    className={`rounded-md px-3 py-2.5 text-left font-poppins text-xs transition-colors ${
                      value === option.label
                        ? 'bg-orange-700 text-white'
                        : 'bg-[#f0f0f0] text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

