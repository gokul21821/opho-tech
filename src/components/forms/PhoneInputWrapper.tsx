'use client';

import { useEffect, useRef } from 'react';
import { PhoneInput, PhoneInputRefType } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PhoneInputWrapperProps {
  value: string;
  onChange: (value: string) => void;
  defaultCountry?: string;
  disabled?: boolean;
}

const FALLBACK_COUNTRY = "us";

function normalizeDefaultCountry(input: string | undefined): string {
  const code = (input ?? "").trim().toLowerCase();
  return /^[a-z]{2}$/.test(code) ? code : FALLBACK_COUNTRY;
}

export const PhoneInputWrapper = ({
  value,
  onChange,
  defaultCountry,
  disabled = false,
}: PhoneInputWrapperProps) => {
  const normalizedCountry = normalizeDefaultCountry(defaultCountry);
  const phoneInputRef = useRef<PhoneInputRefType>(null);

  // This effect runs when defaultCountry changes and programmatically sets the country
  useEffect(() => {
    if (phoneInputRef.current && normalizedCountry) {
      // Use the ref method to change country programmatically
      phoneInputRef.current.setCountry(normalizedCountry, { focusOnInput: false });
    }
  }, [normalizedCountry]);

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="phone"
        className="font-poppins text-sm text-gray-900"
      >
        Phone Number
      </label>
      <PhoneInput
        ref={phoneInputRef} // ← ADD REF
        defaultCountry={normalizedCountry}
        forceDialCode={true}
        disableDialCodePrefill={true}
        value={value}
        onChange={(val) => onChange(val || '')}
        disabled={disabled}
        className="react-international-phone-input"
        inputStyle={{
            width: "100%",
            fontFamily: "Poppins, sans-serif",
            fontSize: "12px",
            color: "#111827",
            backgroundColor: "#f0f0f0",
            border: "none",
        }}
        countrySelectorStyleProps={{
            buttonStyle: {
                backgroundColor: "#f0f0f0",
                border: "none",
            }
        }}
        style={
          {
            "--react-international-phone-height": "42px",
            "--react-international-phone-border-radius": "0.375rem",
            "--react-international-phone-border-color": "transparent",
            "--react-international-phone-background-color": "#f0f0f0",
            "--react-international-phone-text-color": "#111827",
            "--react-international-phone-selected-dropdown-item-background-color": "#f97316",
          } as React.CSSProperties
        }
      />
    </div>
  );
};