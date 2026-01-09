'use client';

import { useState, useRef, useEffect } from 'react';
import { ClockIcon } from './ContactIcons';
import { TIME_SLOTS, formatTime12Hour, convertTo24Hour, isEndTimeValid } from '@/lib/date-utils';

interface TimePickerProps {
  startTime: string;
  startPeriod: string;
  endTime: string;
  endPeriod: string;
  onTimeSelect: (type: 'start' | 'end', field: 'time' | 'period', value: string) => void;
}

export const TimePicker = ({
  startTime,
  startPeriod,
  endTime,
  endPeriod,
  onTimeSelect
}: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  const displayValue = (startTime || endTime)
    ? (() => {
        const start24 = startTime ? convertTo24Hour(startTime, startPeriod) : '';
        const end24 = endTime ? convertTo24Hour(endTime, endPeriod) : '';
        return `${formatTime12Hour(start24 || '--:--')} - ${formatTime12Hour(end24 || '--:--')}`;
      })()
    : 'Select your time';

  return (
    <div ref={containerRef} className="relative flex flex-1 flex-col gap-1">
      <label className="font-poppins text-sm text-gray-900">
        Preferred Time Slot
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md bg-[#f0f0f0] px-3 py-2.5 font-poppins text-xs text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
      >
        <span className={!startTime && !endTime ? "text-gray-300" : ""}>
          {displayValue}
        </span>
        <ClockIcon className="size-4 text-gray-500" />
      </button>

      {isOpen && (
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
                  onClick={() => onTimeSelect('start', 'time', time)}
                  className={`w-full rounded px-2 py-1.5 text-left font-poppins text-xs transition-colors ${
                    startTime === time
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
                  onClick={() => onTimeSelect('start', 'period', period)}
                  className={`flex-1 px-2 py-2 text-center font-poppins text-xs transition-colors ${
                    startPeriod === period
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
                const isDisabled = !!(startTime && startPeriod && !isEndTimeValid(startTime, startPeriod, time, endPeriod));
                return (
                  <button
                    key={`end-time-${time}`}
                    type="button"
                    onClick={() => onTimeSelect('end', 'time', time)}
                    disabled={isDisabled}
                    className={`w-full rounded px-2 py-1.5 text-left font-poppins text-xs transition-colors ${
                      endTime === time
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
                const isDisabled = !!(startTime && startPeriod && endTime && !isEndTimeValid(startTime, startPeriod, endTime, period));
                return (
                  <button
                    key={`end-period-${period}`}
                    type="button"
                    onClick={() => onTimeSelect('end', 'period', period)}
                    disabled={isDisabled}
                    className={`flex-1 px-2 py-2 text-center font-poppins text-xs transition-colors ${
                      endPeriod === period
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
  );
};

