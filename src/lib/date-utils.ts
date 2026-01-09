// Helper function to convert time + period to 24-hour format
export const convertTo24Hour = (time12: string, period: string): string => {
  if (!time12) return '';

  const [hourStr, minute] = time12.split(':');
  let hour = parseInt(hourStr);

  // Convert to 24-hour format
  if (period === 'AM') {
    if (hour === 12) hour = 0; // 12 AM is 00
  } else { // PM
    if (hour !== 12) hour += 12; // Add 12 for PM (except 12 PM which stays 12)
  }

  return `${hour.toString().padStart(2, '0')}:${minute}`;
};

// Helper function to convert 24-hour time to 12-hour format with AM/PM
export const formatTime12Hour = (time24: string): string => {
  if (!time24 || time24 === '--:--') return '--:--';

  // Create a dummy date to use the native Intl formatter
  const [hours, minutes] = time24.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));

  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

// Helper function to compare times for validation
export const isEndTimeValid = (startTime24: string, startPeriod: string, endTime24: string, endPeriod: string): boolean => {
  if (!startTime24 || !endTime24) return true;

  const start24 = convertTo24Hour(startTime24, startPeriod);
  const end24 = convertTo24Hour(endTime24, endPeriod);

  const [startHour, startMin] = start24.split(':').map(Number);
  const [endHour, endMin] = end24.split(':').map(Number);

  const startMinutes = startHour * 60 + startMin;
  const endMinutes = endHour * 60 + endMin;

  return endMinutes > startMinutes;
};

// Generate time slots from 12:00 to 11:30 (24 options)
export const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => {
  const hour = i < 2 ? 12 : Math.floor(i / 2); // 12, 12, 1, 1, 2, 2, ..., 11, 11
  const minute = i % 2 === 0 ? '00' : '30';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour.toString().padStart(2, '0')}:${minute}`;
});

