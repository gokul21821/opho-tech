import type { ComponentProps } from "react";
import { Fragment } from "react";
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
   */
  dividerContainerClassName?: string;
  dividerImageClassName?: string;
  dividerImageHeight?: number;
};

export function IconCardsSection({
  title,
  subtitle,
  items,
  stackTitleWords = false, // Changed default to false for normal text wrapping
  withBackgroundDots = false,
  backgroundDotsProps,
  sectionClassName = "mx-auto max-w-7xl px-6 py-15",
  titleClassName = "text-center text-4xl font-medium",
  subtitleClassName = "text-center text-base text-[#3A4A5F] mt-4 mb-12",
  cardsRowClassName = "mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6",
  cardClassName = "flex-1 min-w-[200px] rounded-[20px] px-10 py-10 text-center",
  titleTextClassName = "text-base font-medium leading-[20px] text-black mx-auto max-w-[180px]",
  descriptionClassName = "mt-2 text-sm text-[#3A4A5F]",
  dividerContainerClassName = "hidden items-center lg:flex",
  dividerImageClassName = "w-auto h-[325px]",
  dividerImageHeight = 320,
}: IconCardsSectionProps) {
  const content = (
    <section className={sectionClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}

      <div className={cardsRowClassName}>
        {items.map((item, index, array) => (
          <Fragment key={item.title}>
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
              <div className={dividerContainerClassName}>
                <Image
                  src="/images/raar/lineraar.svg"
                  alt=""
                  width={2}
                  height={dividerImageHeight}
                  className={dividerImageClassName}
                  aria-hidden
                />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );

  if (!withBackgroundDots) return content;

  return <BackgroundDots {...backgroundDotsProps}>{content}</BackgroundDots>;
}