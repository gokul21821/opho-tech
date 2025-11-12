"use client";

import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

const COMPANY_LINKS = [
  "About Us",
  "Careers",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
];

const RESOURCE_LINKS = ["Blogs", "Newsletters", "Case Studies"];

const SOLUTION_LINKS = [
  "RAAR",
  "Data Monetization",
  "Cloud Integration & Architecture",
  "AI Solutions & Services",
  "AI Agent Development",
  "Cyber Security Solutions",
];

const LinkedInIcon = () => (
  <svg
    aria-hidden="true"
    className="size-5"
    fill="none"
    viewBox="0 0 20 20"
  >
    <rect width="20" height="20" rx="5" fill="#FFF6ED" />
    <path
      d="M13.89 13.89h-1.39V11.25c0-.68-.29-1.11-.97-1.11-.58 0-.99.39-1.11.76-.06.11-.07.26-.07.42v2.57H9.06c.03-4.17.01-4.58 0-4.93h1.39v.78c.18-.29.64-.71 1.49-.71 1.09 0 2.05.73 2.05 2.32v2.54ZM6.74 8.13a.81.81 0 0 1-.82-.82c0-.45.37-.82.82-.82.44 0 .79.35.79.82 0 .47-.35.82-.79.82Zm.69 5.76H6.04V8.96h1.39v4.93Z"
      fill="#E45412"
    />
  </svg>
);

const XIcon = () => (
  <svg
    aria-hidden="true"
    className="size-5"
    fill="none"
    viewBox="0 0 20 20"
  >
    <rect width="20" height="20" rx="5" fill="#FFF6ED" />
    <path
      d="M13.13 6.88h-1.38l-1.69 2.21-1.28-1.71H7.29l2.58 3.47-2.58 3.4h1.38l1.87-2.45 1.28 1.71.83 1.1h1.84l-2.62-3.46 2.54-3.78Z"
      fill="#E45412"
    />
  </svg>
);

export function Footer() {
  const curveHeight = 60; // Height of the curve area in pixels
  
  return (
    <footer className="relative w-full overflow-x-clip text-white">
      {/* SVG definition for the clip path */}
      <svg className="absolute size-0">
        <defs>
          <clipPath id="footer-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.05 Q 0.5 0 1 0.05 L 1 1 L 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background container with clip path */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ 
          top: `-${curveHeight}px`,
          clipPath: "url(#footer-clip)"
        }}
      >
        {/* Wave pattern background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/footer-background.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A1A3A]/95" />
        
        {/* Blue radial gradients overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 60% at 50% 10%, rgba(59, 130, 246, 0.15), transparent 60%), " +
              "radial-gradient(120% 50% at 50% 70%, rgba(37, 99, 235, 0.12), transparent 65%)",
          }}
        />
      </div>

      {/* Top curved orange border - matches the clip path exactly */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 z-20"
        style={{ top: `-${curveHeight}px`, height: `${curveHeight}px` }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0.42 Q 0.6 0 1 0.42"
            fill="none"
            stroke="#E66A2C"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-8 lg:px-12">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Company Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/logo.svg"
                  alt="OphoTech"
                  width={184}
                  height={39}
                  priority
                  className="h-auto w-44"
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-blue-100">
                OphoTech is a research and technology partner for enterprises,
                delivering business audits, AI-driven insights, and scalable
                SaaS/PaaS solutions. We help leaders make confident decisions,
                stay compliant, and prepare for future growth.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3.5">
              <Link
                aria-label="Visit OphoTech on LinkedIn"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 p-1.5 transition hover:bg-white/20"
                href="https://www.linkedin.com/company/ophotech/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </Link>
              <Link
                aria-label="Visit OphoTech on X"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 p-1.5 transition hover:bg-white/20"
                href="https://x.com/opho_tech"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          
          {/* Resources Links */}
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          
          {/* Solutions Links */}
          <FooterColumn title="Solutions" links={SOLUTION_LINKS} />
        </div>

        {/* Copyright Section */}
        <div className="mt-10 space-y-4">
          {/* Divider line */}
          <div className="h-px w-full bg-blue-100/20" />
          
          {/* Copyright text */}
          <p className="text-center text-sm text-white/50">
            Copyright © {new Date().getFullYear()} OphoTech Pvt. Ltd. | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-6">
      <h3 className="border-b border-orange-500 pb-2 text-lg font-medium capitalize">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-blue-100">
        {links.map((link) => (
          <li key={link}>
            <Link
              className="transition-colors hover:text-white"
              href={slugify(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

