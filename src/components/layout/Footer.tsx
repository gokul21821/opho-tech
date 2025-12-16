"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { slugify } from "@/lib/utils";
import { ContactModal } from "@/components/forms/ContactModal";

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
  "Cloud Integration",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Start loading 100px before footer enters viewport
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden">
      {/* Background Layer - Lazy loaded when footer is near viewport */}
      {isFooterVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Orange ellipse - positioned to show curved top portion */}
          <div className="absolute left-1/2 w-[150%] -translate-x-1/2  h-[140px] top-[1x] sm:h-[200px] md:h-[320px]  lg:h-[500px] xl:h-[620px] 2xl:h-[2000px]">
            <div className="relative h-full w-full">
              <Image
                src="/images/footer/footer-elipse.svg"
                alt=""
                fill
                sizes="150vw"
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* Blue footer background - overlays ellipse, leaving top curve visible */}
          <div className="absolute top-[8px] left-0 right-0 bottom-0 md:top-[7px] lg:top-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/images/footer/footer-bg.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-8 pt-24 md:px-8 lg:px-12 lg:pt-32">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-8 lg:gap-16">
          {/* Company Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <div className="relative h-[39px] w-[184px]">
                  <Image
                    src="/images/logo/logo.svg"
                    alt="OphoTech"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-blue-50/90">
                OphoTech is a research and technology partner for enterprises,
                delivering business audits, AI-driven insights, and scalable
                SaaS/PaaS solutions. We help leaders make confident decisions,
                stay compliant, and prepare for future growth.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link
                aria-label="Visit OphoTech on LinkedIn"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 transition-all hover:bg-white/20 hover:scale-105"
                href="https://www.linkedin.com/company/ophotech/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </Link>
              <Link
                aria-label="Visit OphoTech on X"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 transition-all hover:bg-white/20 hover:scale-105"
                href="https://x.com/opho_tech"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <FooterColumn
            title="Company"
            links={COMPANY_LINKS}
            onContactClick={() => setIsModalOpen(true)}
            hrefMapper={(link) => {
              if (link === "About Us") return "/company/about-us";
              if (link === "Careers") return "/company/careers";
              return slugify(link);
            }}
          />
          
          {/* Resources Links */}
          <FooterColumn
            title="Resources"
            links={RESOURCE_LINKS}
            hrefMapper={(link) => {
              if (link === "Newsletters") return "/newsletters";
              if (link === "Case Studies") return "/case-studies";
              if (link === "Blogs") return "/blogs";
              return slugify(link);
            }}
          />
          
          {/* Solutions Links */}
          <FooterColumn
            title="Solutions"
            links={SOLUTION_LINKS}
            hrefMapper={(link) => {
              if (link === "RAAR") return "/solutions/research-analysis-adoption-and-reporting";
              return `/solutions${slugify(link)}`;
            }}
          />
        </div>

        {/* Copyright Section */}
        <div className="mt-12 space-y-6 lg:mt-16">
          {/* Divider line */}
          <div className="h-px w-full bg-white/10" />
          
          {/* Copyright text */}
          <p className="text-center text-sm text-white/50">
            Copyright © {new Date().getFullYear()} OphoTech Pvt. Ltd. | All
            Rights Reserved
          </p>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
  hrefPrefix?: string;
  onContactClick?: () => void;
  hrefMapper?: (link: string) => string;
};

function FooterColumn({ title, links, hrefPrefix, onContactClick, hrefMapper }: FooterColumnProps) {
  return (
    <nav className="space-y-5">
      <h3 className="relative pb-2 text-base font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-orange-500">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-blue-50/80">
        {links.map((link) => (
          <li key={link}>
            {link === "Contact" ? (
              <button
                onClick={onContactClick}
                className="inline-block transition-colors hover:text-white hover:underline hover:underline-offset-2"
              >
                {link}
              </button>
            ) : (
              <Link
                className="inline-block transition-colors hover:text-white hover:underline hover:underline-offset-2"
                href={hrefMapper ? hrefMapper(link) : hrefPrefix ? `${hrefPrefix}${slugify(link)}` : slugify(link)}
              >
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
