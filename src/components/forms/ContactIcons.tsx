import Image from 'next/image';

export const LinkedInIcon = () => (
  <Image
    src="/images/icons/linkedin.svg"
    alt="LinkedIn"
    width={32}
    height={32}
    className="size-8"
  />
);

export const XIcon = () => (
  <Image
    src="/images/icons/X.svg"
    alt="X"
    width={32}
    height={32}
    className="size-8"
  />
);

export const EmailIcon = () => (
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

export const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.31917 2.05347C5.31917 1.88778 5.18485 1.75347 5.01917 1.75347C4.85348 1.75347 4.71917 1.88778 4.71917 2.05347H5.01917H5.31917ZM5.01917 5.27262H4.71917C4.71917 5.37067 4.76708 5.46253 4.84749 5.51864L5.01917 5.27262ZM7.08775 7.08196C7.22362 7.17677 7.41063 7.14349 7.50545 7.00761C7.60026 6.87174 7.56698 6.68473 7.43111 6.58991L7.25943 6.83594L7.08775 7.08196ZM9.26101 4.99989H8.96101C8.96101 7.18769 7.18745 8.96125 4.99965 8.96125V9.26125V9.56125C7.51882 9.56125 9.56101 7.51906 9.56101 4.99989H9.26101ZM4.99965 9.26125V8.96125C2.81184 8.96125 1.03828 7.18769 1.03828 4.99989H0.738281H0.438281C0.438281 7.51906 2.48047 9.56125 4.99965 9.56125V9.26125ZM0.738281 4.99989H1.03828C1.03828 2.81209 2.81184 1.03853 4.99965 1.03853V0.738525V0.438525C2.48047 0.438525 0.438281 2.48072 0.438281 4.99989H0.738281ZM4.99965 0.738525V1.03853C7.18745 1.03853 8.96101 2.81209 8.96101 4.99989H9.26101H9.56101C9.56101 2.48072 7.51882 0.438525 4.99965 0.438525V0.738525ZM5.01917 2.05347H4.71917V5.27262H5.01917H5.31917V2.05347H5.01917ZM5.01917 5.27262L4.84749 5.51864L7.08775 7.08196L7.25943 6.83594L7.43111 6.58991L5.19085 5.0266L5.01917 5.27262Z" fill="currentColor"/>
  </svg>
);

export const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      d="M15 5L5 15M5 5l10 10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UploadIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  );

