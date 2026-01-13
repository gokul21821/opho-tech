import Image from "next/image";
import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { formatDate } from "@/lib/api";

interface ContentCardProps {
  id: string;
  title: string;
  date: string;
  contentType: "newsletters" | "case-studies" | "blogs";
}

export function ContentCard({
  id,
  title,
  date,
  contentType,
}: ContentCardProps) {
  return (
    <Link
      href={`/${contentType}/${id}`}
      className="group relative flex w-full flex-col gap-4 overflow-visible rounded-2xl border border-orange-100 bg-white p-5 transition-shadow duration-300 hover:bg-orange-25 hover:shadow-lg sm:min-w-0 sm:flex-1 md:w-[280px] lg:w-[330px]"
    >
      <div className="flex size-11 items-center justify-center overflow-hidden">
        <ServiceIcon name="cloud-integration" className="size-11" />
      </div>

      <h3 className="min-h-[3.5rem] whitespace-pre-line mb-12 font-poppins text-base font-medium capitalize leading-normal text-gray-900 sm:text-lg">
        {title}
      </h3>

     
      <div className="absolute bottom-4 left-4 z-10">
        <div className="rounded-lg bg-gray-25 px-2.5 py-1.5">
          <span className="block font-poppins text-xs leading-tight text-gray-900">
            {formatDate(date)}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(59, 58, 57, 0.33) 1px, transparent 1px),
              radial-gradient(circle, rgba(93, 93, 92, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 6px 6px",
          }}
        />
      </div>

      <button
        aria-hidden="true"
        className="absolute bottom-8 right-8 z-[4] flex h-11 w-11 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-lg bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] transition-transform duration-300 md:h-10 md:w-10"
      >
        <Image
          alt=""
          src="/images/servicessection/arrow.svg"
          width={14}
          height={14}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      </button>
    </Link>
  );
}

