import type { ComponentProps } from "react";
import Image, { type StaticImageData } from "next/image";

import BackgroundDots from "@/components/ui/background";

export type IconCardsSectionItem = {
  title: string;
  description?: string;
  icon: string | StaticImageData;
};

export type IconCardsSectionProps = {
  title: string;
  subtitle?: string;
  items: IconCardsSectionItem[];

  /**
   * Careers reference behavior:
   * - true: render each word on a new line
   * - false: render title normally
   */
  stackTitleWords?: boolean;

  /**
   * If true, wraps the section with BackgroundDots.
   * Use `backgroundDotsProps` to pass spacing/dotSize/etc.
   */
  withBackgroundDots?: boolean;
  backgroundDotsProps?: Omit<ComponentProps<typeof BackgroundDots>, "children">;

  /**
   * Styling overrides. Defaults are based on Careers page (105–175).
   */
  sectionClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  cardsRowClassName?: string;
  cardClassName?: string;
  titleTextClassName?: string;
  descriptionClassName?: string;

  /**
   * Divider (between cards) defaults to Careers implementation.
   *
   * NOTE: divider is rendered with a simple element (not next/image) to avoid
   * inconsistent scaling produced by next/image for very thin SVGs.
   */
  dividerContainerClassName?: string;
  dividerBarClassName?: string;
  /**
   * If provided, uses an explicit height in px for the divider bar.
   * If omitted, the divider uses h-full (matches card height).
   */
  dividerImageHeight?: number;
};

export function IconCardsSection({
  title,
  subtitle,
  items,
  stackTitleWords = false, // Changed default to false for normal text wrapping
  withBackgroundDots = false,
  backgroundDotsProps,
  sectionClassName = "mx-auto max-w-5xl mb-2 px-4",
  titleClassName = "text-center text-4xl font-medium mt-10",
  subtitleClassName = "text-center text-base text-[#3A4A5F] mt-5 mb-2",
  cardsRowClassName =
    "mt-5 flex flex-col  items-center lg:flex-row lg:items-end lg:justify-center lg:gap-0",
  cardClassName = "flex-1 min-w-[200px] rounded-[20px] lg:px-5 xl:px-2 py-15 text-center flex flex-col items-center",
  titleTextClassName =
    "text-base font-medium leading-[20px] text-black mx-auto max-w-[180px]",
  descriptionClassName = "mt-2 text-sm text-[#3A4A5F]",
  dividerContainerClassName =
    "flex items-center justify-center lg:flex",
  // dividerBarClassName controls width + gradient; height handled by style/h-full
  dividerBarClassName = "block w-[1px] bg-gradient-to-b from-transparent via-[#F37121] to-transparent mx-6",
  dividerImageHeight = 290,
}: IconCardsSectionProps) {
  const content = (
    <section className={sectionClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}

      <div className="hidden lg:flex lg:items-start lg:justify-center lg:gap-0">
        {items.map((item, index, array) => (
          <div key={`card-group-${index}`} className="flex items-start gap-0">
            <article className={cardClassName}>
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#FFE6D5]">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>

              <p className={titleTextClassName}>
                {stackTitleWords
                  ? item.title.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="block">
                        {word}
                      </span>
                    ))
                  : item.title}
              </p>

              {item.description?.trim() ? (
                <p className={descriptionClassName}>{item.description}</p>
              ) : null}
            </article>

            {index < array.length - 1 ? (
              <div
                className="w-[1px] bg-gradient-to-b from-transparent via-[#F37121] to-transparent lg:mx-2 xl:mx-6 flex-shrink-0"
                style={{
                  height: `${dividerImageHeight}px`,
                }}
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        {items.map((item, index, array) => (
          <div key={`mobile-card-${index}`}>
            <article className={cardClassName}>
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#FFE6D5]">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>

              <p className={titleTextClassName}>
                {stackTitleWords
                  ? item.title.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="block">
                        {word}
                      </span>
                    ))
                  : item.title}
              </p>

              {item.description?.trim() ? (
                <p className={descriptionClassName}>{item.description}</p>
              ) : null}
            </article>

            {index < array.length - 1 ? (
              <div
                className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#F37121] to-transparent"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );

  if (!withBackgroundDots) return content;

  return <BackgroundDots {...backgroundDotsProps}>{content}</BackgroundDots>;
}