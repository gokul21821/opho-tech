"use client";

import { useState } from "react";
import Image from "next/image";
import { Toast } from "./Toast";
import BackgroundDots from "./background";

interface SocialShareCardProps {
  title: string;
  url: string;
  contentType: "blogs" | "newsletters" | "case-studies";
}

const contentTypeLabels = {
  blogs: "Blog",
  newsletters: "Newsletter",
  "case-studies": "Case Study",
};

export function SocialShareCard({
  title,
  url,
  contentType,
}: SocialShareCardProps) {
  const [showToast, setShowToast] = useState(false);
  const contentLabel = contentTypeLabels[contentType];

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  // For WhatsApp, encode the complete message as one string
  const whatsappText = encodeURIComponent(`${title} ${url}`);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    // Using x.com for modern X (Twitter) branding
    x: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${whatsappText}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleInstagramClick = () => {
    // Instagram doesn't have web sharing, so copy link and inform user
    handleCopyLink();
  };

  const socialButtons = [
    {
      name: "LinkedIn",
      icon: "/images/social-icons/linkedin.svg",
      href: shareLinks.linkedin,
      onClick: null,
    },
    {
      name: "Facebook",
      icon: "/images/social-icons/facebook.svg",
      href: shareLinks.facebook,
      onClick: null,
    },
    {
      name: "X",
      icon: "/images/social-icons/x.svg",
      href: shareLinks.x,
      onClick: null,
    },
    {
      name: "Instagram",
      icon: "/images/social-icons/instagram.svg",
      href: null,
      onClick: handleInstagramClick,
    },
    {
      name: "WhatsApp",
      icon: "/images/social-icons/whatsapp.svg",
      href: shareLinks.whatsapp,
      onClick: null,
    },
    {
      name: "Copy Link",
      icon: "/images/social-icons/copy-link.svg",
      href: null,
      onClick: handleCopyLink,
    },
  ];

  return (
    <>
      <div className="sticky top-24">
        <BackgroundDots
          className="rounded-2xl"
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <div className="p-4">
            <h3 className="mb-4 font-poppins text-lg font-semibold text-gray-900">
              Share This {contentLabel}:
            </h3>

            <div className="flex flex-wrap justify-center ">
              {socialButtons.map((button) => {
                if (button.href) {
                  return (
                    <a
                      key={button.name}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center transition-transform hover:scale-110"
                      aria-label={`Share on ${button.name}`}
                    >
                      <Image
                        src={button.icon}
                        alt={button.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 transition-opacity group-hover:opacity-80"
                      />
                    </a>
                  );
                } else {
                  return (
                    <button
                      key={button.name}
                      onClick={button.onClick || undefined}
                      className="group flex items-center justify-center transition-transform hover:scale-110"
                      aria-label={button.name}
                    >
                      <Image
                        src={button.icon}
                        alt={button.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 transition-opacity group-hover:opacity-80"
                      />
                    </button>
                  );
                }
              })}
            </div>
          </div>
        </BackgroundDots>
      </div>

      <Toast
        message="Link copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

