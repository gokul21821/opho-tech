'use client';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PhoneInputWrapperProps {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneInputWrapper = ({ value, onChange }: PhoneInputWrapperProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="phone"
        className="font-poppins text-sm text-gray-900"
      >
        Phone Number
      </label>
      <PhoneInput
        defaultCountry="us"
        value={value}
        onChange={(val) => onChange(val || '')}
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
            "--react-international-phone-border-radius": "0.375rem", // 6px
            "--react-international-phone-border-color": "transparent",
            "--react-international-phone-background-color": "#f0f0f0",
            "--react-international-phone-text-color": "#111827",
            "--react-international-phone-selected-dropdown-item-background-color": "#f97316", // orange-500
          } as React.CSSProperties
        }
      />
    </div>
  );
};
