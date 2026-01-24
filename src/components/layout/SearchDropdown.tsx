"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { AllContentData, SearchResults } from "@/lib/types";
import { searchContentByTitle } from "@/lib/client-api";

interface SearchDropdownProps {
  allContent: AllContentData | null;
  isLoading: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

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

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="size-8 animate-spin rounded-full border-4 border-orange-100 border-t-orange-500" />
  </div>
);

export function SearchDropdown({
  allContent,
  isLoading,
  onClose,
  isMobile = false,
}: SearchDropdownProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults>({
    newsletters: [],
    blogs: [],
    caseStudies: [],
    hasResults: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when dropdown opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Debounced search
  useEffect(() => {
    if (!allContent) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const results = searchContentByTitle(allContent, searchQuery);
      setSearchResults(results);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, allContent]);

  const getContentTypeLabel = (type: "newsletters" | "blogs" | "caseStudies") => {
    switch (type) {
      case "newsletters":
        return "Newsletter";
      case "blogs":
        return "Blog";
      case "caseStudies":
        return "Case Study";
    }
  };

  const getContentTypeUrl = (type: "newsletters" | "blogs" | "caseStudies") => {
    switch (type) {
      case "caseStudies":
        return "case-studies";
      default:
        return type;
    }
  };

  const renderResultSection = (
    items: typeof searchResults.newsletters,
    type: "newsletters" | "blogs" | "caseStudies",
    isLastSection: boolean = false,
  ) => {
    if (items.length === 0) return null;

    return (
      <div key={type} className={isLastSection ? "" : "border-b border-gray-300"}>
        <ul className="space-y-0">
          {items.map((item) => (
            <li key={item.id} className="border-b border-gray-300 last:border-b-0">
              <Link
                href={`/${getContentTypeUrl(type)}/${item.id}`}
                className="group block px-0 py-1 text-sm text-gray-600 transition-colors hover:text-orange-500"
              >
                <span className="block leading-normal">{item.title}</span>
                <span className="inline-flex items-center rounded-md bg-orange-25 px-2.5 py-1 text-xs font-medium text-orange-500 transition-colors group-hover:bg-orange-50">
                  {getContentTypeLabel(type)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={
      isMobile
        ? "flex flex-col h-full bg-white"
        : "absolute right-0 top-[calc(100%+12px)] z-[60] w-[360px] rounded-2xl bg-white shadow-[0px_4px_4.8px_0px_rgba(0,0,0,0.25)]"
    }>
      <div className={isMobile ? "flex flex-col flex-1 p-4 space-y-4" : "space-y-4 p-4"}>
        {/* Mobile Close Button */}
        {isMobile && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Search</h2>
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Close search"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Search Input */}
        <div className="flex items-center gap-3 rounded-lg border border-orange-500 bg-gray-25 px-4 py-3">
          <SearchIcon className="size-5 shrink-0 text-orange-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent font-poppins text-sm font-normal text-gray-900 placeholder:text-gray-400 focus:outline-none"
            aria-label="Search content"
          />
        </div>

        {/* Results */}
        <div className={isMobile ? "flex-1 overflow-y-auto" : "max-h-[400px] overflow-y-auto"}>
          {isLoading ? (
            <LoadingSpinner />
          ) : !allContent ? (
            <div className="py-8 text-center text-sm text-gray-500">
              Failed to load content
            </div>
          ) : !searchResults.hasResults ? (
            <div className="py-8 text-center text-sm text-gray-500">
              {searchQuery.trim()
                ? "No results found"
                : "No content available"}
            </div>
          ) : (
            <div className="space-y-0">
              {renderResultSection(searchResults.newsletters, "newsletters", !searchResults.blogs.length && !searchResults.caseStudies.length)}
              {renderResultSection(searchResults.blogs, "blogs", !searchResults.caseStudies.length)}
              {renderResultSection(searchResults.caseStudies, "caseStudies", true)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}