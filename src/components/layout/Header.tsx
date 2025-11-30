"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { ContactModal } from "@/components/forms/ContactModal";
import { Dropdown } from "@/components/layout/Dropdown";
import { PrimaryButton } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { slugify } from "@/lib/utils";

const NAV_SECTIONS = [
  {
    label: "Company",
    key: "company",
    items: ["About Us", "Team", "Careers"],
  },
  {
    label: "Solutions",
    key: "solutions",
    items: [
      "Research, Analysis, Adoption & Reporting",
      "Data Monetization",
      "Cloud Integration",
      "AI Solutions & Services",
      "AI Agent Development",
      "Cyber Security Solutions",
    ],
  },
  {
    label: "Resources",
    key: "resources",
    items: ["Newsletters", "Blogs", "Case Studies"],
  },
];

const SEARCH_RESULTS = [
  {
    id: "ai-bi-roadmaps-support",
    title: "AI-powered Business Intelligence & Strategic Roadmaps",
    tag: "IT Support",
  },
  {
    id: "newsletter-weekly-1",
    title: "Ophotech Weekly: AI ",
    tag: "Newsletter",
  },
  {
    id: "newsletter-weekly-2",
    title: "Ophotech Weekly",
    tag: "Newsletter",
  },
  {
    id: "ai-bi-roadmaps-blog",
    title: "AI-powered Business Intelligence & Strategic Roadmaps",
    tag: "Blog",
  },
  {
    id: "enterprise-ai-services",
    title: "Enterprise AI Enablement & Research Services",
    tag: "Service",
  },
];

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.5 15.5-3.15-3.15m1.15-3.35a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative flex h-6 w-6 items-center justify-center">
    <span
      className={`absolute h-0.5 w-5 rounded-full bg-orange-25 transition-all duration-200 ${
        open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
      }`}
    />
    <span
      className={`absolute h-0.5 w-5 rounded-full bg-orange-25 transition-opacity duration-200 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      className={`absolute h-0.5 w-5 rounded-full bg-orange-25 transition-all duration-200 ${
        open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
      }`}
    />
  </div>
);

const ChevronSmall = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden="true"
    className={`size-4 text-orange-400 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="currentColor"
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 7 0 0h12L6 7Z" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const navLinkBase =
    "relative inline-flex items-center pb-3 text-sm font-medium text-white/80 transition-colors duration-200 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-orange-500 after:transition-all after:duration-200 after:content-[''] hover:text-white hover:after:w-full";
  const navLinkActive = "text-white after:w-full";

  const dropdowns = useMemo(
    () =>
      NAV_SECTIONS.map((section) => ({
        label: section.label,
        key: section.key,
        items: section.items.map((item) => ({
          label: item,
          href: section.key === "solutions" ? `/solutions${slugify(item)}` : section.key === "company" ? `/company${slugify(item)}` : slugify(item),
        })),
      })),
    [],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header
  className="relative sticky top-0 z-50 bg-[#052568] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-white/20 after:via-orange-500 after:to-white/10 after:content-['']"
  role="banner"
>
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between 
px-[5%]">

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo.svg"
              alt="OphoTech"
              width={184}
              height={39}
              priority
              className="h-auto w-36 md:w-[184px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className={`${navLinkBase} ${
                pathname === "/" ? navLinkActive : ""
              }`}
            >
              Home
            </Link>
            {dropdowns.map((dropdown) => {
              const isActive = dropdown.items.some((item) =>
                pathname?.startsWith(item.href),
              );
              return (
                <Dropdown
                  key={dropdown.key}
                  label={dropdown.label}
                  items={dropdown.items}
                  isActive={isActive}
                  linkClassName={navLinkBase}
                  activeClassName={navLinkActive}
                />
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div ref={searchContainerRef} className="relative">
              <button
                type="button"
                aria-label="Search"
                className="flex size-10 items-center justify-center rounded-xl bg-orange-25 text-orange-500 transition hover:bg-orange-50"
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-expanded={searchOpen}
                aria-haspopup="true"
              >
                <SearchIcon className="size-9" />
              </button>

              {searchOpen ? <SearchDropdown /> : null}
            </div>
            <PrimaryButton onClick={() => setContactOpen(true)}>
              Contact Us
            </PrimaryButton>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex items-center justify-center rounded-xl border border-white/10 p-2 text-orange-25 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        <div
          className={`lg:hidden transition-[max-height,opacity] duration-300 ${
            mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden border-t border-white/10 bg-[#151722]/95`}
        >
          <div className="space-y-6 px-4 py-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-semibold ${
                pathname === "/"
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </Link>
            {dropdowns.map((dropdown) => {
              const isExpanded = expandedSection === dropdown.key;
              return (
                <div key={dropdown.key} className="border-t border-white/5 pt-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-white/80"
                    onClick={() =>
                      setExpandedSection((prev) =>
                        prev === dropdown.key ? null : dropdown.key,
                      )
                    }
                  >
                    {dropdown.label}
                    <ChevronSmall open={isExpanded} />
                  </button>
                  <div
                    className={`mt-3 space-y-2 pl-4 transition-[max-height,opacity] duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-blue-100 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="flex items-center gap-3 pt-4">
              <SecondaryButton
                withArrow={false}
                className="w-full justify-center"
              >
                Search
              </SecondaryButton>
              <PrimaryButton
                className="w-full justify-center"
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
              >
                Contact Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </header>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

function SearchDropdown() {
  return (
    <div className="absolute right-0 top-[calc(100%+12px)] z-[60] w-[360px] rounded-2xl bg-white shadow-[0px_4px_4.8px_0px_rgba(0,0,0,0.25)]">
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3 rounded-lg border border-orange-500 bg-gray-25 px-4 py-3">
          <SearchIcon className="size-5 text-orange-500" />
          <span className="text-sm font-normal text-gray-900">Search here..</span>
        </div>
        <ul className="divide-y divide-gray-100">
          {SEARCH_RESULTS.map((result) => (
            <li key={result.id}>
              <Link
                href={slugify(result.title)}
                className="group block px-0 py-3 text-sm text-gray-600 transition-colors hover:text-orange-500"
              >
                <span className="block leading-normal">{result.title}</span>
                <span className="mt-2 inline-flex items-center rounded-md bg-orange-25 px-2.5 py-1 text-xs font-medium text-orange-500 transition-colors group-hover:bg-orange-50">
                  {result.tag}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

