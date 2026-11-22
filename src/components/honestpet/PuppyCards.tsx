"use client";

import Image from "next/image";
import { Share2, Video, Play } from "lucide-react";
import type { Puppy, DeliveryVideoCard } from "@/data/puppies";

/* ----------------------------------
 * Design tokens (extracted from the reference design)
 * - cream CTA:      #F7DFB0  / text #4C3D1E
 * - ready-now green: #7DE95D / text #0A4D23
 * - navy text:      #1B2653
 * - male chip:      #DAEAFB / #3F76C8
 * - female chip:    #FBDDE9 / #DB6B9F
 * ---------------------------------- */

const GENDER_STYLES: Record<string, { bg: string; color: string; ring: string }> = {
  Male: { bg: "#DAEAFB", color: "#3F76C8", ring: "rgba(63,118,200,0.28)" },
  Female: { bg: "#FBDDE9", color: "#DB6B9F", ring: "rgba(219,107,159,0.28)" },
};

function PuppyCardItem({ puppy }: { puppy: Puppy }) {
  const genderStyle = GENDER_STYLES[puppy.gender] ?? GENDER_STYLES.Male;

  return (
    <div className="@container group flex w-full cursor-pointer justify-center" id={`pet-card-${puppy.id}`}>
      <div className="flex w-full flex-col overflow-hidden rounded-[max(7cqw,14px)] bg-white shadow-[0_4px_18px_rgba(26,26,46,0.08)] transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(26,26,46,0.16)]">
        {/* Photo */}
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-t-[max(7cqw,14px)]" style={{ aspectRatio: "1 / 1.04" }}>
          <Image
            src={puppy.image}
            alt={`Image of ${puppy.name}`}
            fill
            sizes="(max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 24rem"
            className="object-cover object-[center_top]"
          />

          {/* Video pill (top-left) — frosted white like reference */}
          {puppy.hasVideo && (
            <span className="absolute left-[max(2.7cqw,8px)] top-[max(2.7cqw,8px)] z-[3] inline-flex items-center gap-[0.4em] rounded-full bg-white/85 py-[0.5em] pl-[0.85em] pr-[0.95em] text-[max(4.9cqw,9.5px)] font-medium leading-none text-[#1a1a2e] shadow-[0_1px_3px_rgba(0,0,0,0.12)] backdrop-blur-[3px]">
              <Video className="h-[1.25em] w-[1.25em]" strokeWidth={2.2} />
              Video
            </span>
          )}

          {/* Share button (top-right) */}
          <span
            className="absolute right-[max(2.7cqw,8px)] top-[max(2.7cqw,8px)] z-[3] flex aspect-square w-[max(9cqw,26px)] items-center justify-center rounded-full bg-black/40 text-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] backdrop-blur-[3px]"
            aria-label={`Share ${puppy.name}`}
          >
            <Share2 className="h-[45%] w-[45%]" strokeWidth={2.2} />
          </span>

          {/* Bottom badges */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between p-[max(2.7cqw,8px)]">
            <span>
              {puppy.readyNow && (
                <span className="inline-flex items-center whitespace-nowrap rounded-full bg-[#7DE95D] px-[0.85em] py-[0.5em] text-[max(4.9cqw,9.5px)] font-semibold leading-none text-[#0A4D23] shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
                  Ready Now
                </span>
              )}
            </span>
            <span className="flex items-center gap-[max(1.2cqw,4px)]">
              {puppy.mini && (
                <span className="inline-flex items-center rounded-full bg-black/45 px-[0.95em] py-[0.5em] text-[max(4.9cqw,9.5px)] font-normal leading-none text-white backdrop-blur-[2px]">
                  Mini
                </span>
              )}
              {puppy.generation && (
                <span className="inline-flex items-center rounded-full bg-black/45 px-[0.95em] py-[0.5em] text-[max(4.9cqw,9.5px)] font-normal leading-none text-white backdrop-blur-[2px]">
                  {puppy.generation}
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col px-[max(6.2cqw,12px)] pb-[max(6.5cqw,13px)] pt-[max(4.2cqw,10px)]">
          {/* Name + price */}
          <div className="flex items-baseline justify-between gap-[2cqw]">
            <span className="min-w-0 truncate whitespace-nowrap text-[max(9cqw,16px)] font-bold leading-tight text-[#1B2653]">
              {puppy.name}
            </span>
            <span className="whitespace-nowrap text-[max(7.6cqw,13.5px)] font-medium leading-tight text-[#1B2653]">
              {puppy.price}
            </span>
          </div>
          <p className="mt-[0.3em] text-[max(5.6cqw,11px)] leading-snug text-[#6B7280]">{puppy.breed}</p>

          {/* Gender + age chips */}
          <div className="mt-[max(3.8cqw,9px)] flex flex-wrap items-center justify-center gap-[max(2cqw,6px)]">
            <span
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-[1.3em] py-[0.55em] text-[max(5.4cqw,10px)] font-semibold leading-none"
              style={{
                background: genderStyle.bg,
                color: genderStyle.color,
                boxShadow: `inset 0 0 0 1px ${genderStyle.ring}`,
              }}
            >
              {puppy.gender}
            </span>
            <span
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-[1.3em] py-[0.55em] text-[max(5.4cqw,10px)] font-semibold leading-none"
              style={{
                background: GENDER_STYLES.Male.bg,
                color: GENDER_STYLES.Male.color,
                boxShadow: `inset 0 0 0 1px ${GENDER_STYLES.Male.ring}`,
              }}
            >
              {puppy.weeks}
            </span>
          </div>

          {/* CTA — cream button like reference */}
          <button
            type="button"
            className="mt-[max(4.2cqw,10px)] inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#F7DFB0] px-[1em] py-[0.8em] text-[max(7.2cqw,13px)] font-bold leading-none text-[#4C3D1E] transition-[filter,transform] duration-150 hover:bg-[#F5D89C] active:scale-[0.985]"
          >
            Ask About Me
          </button>
        </div>
      </div>
    </div>
  );
}

function VideoCardItem({ video }: { video: DeliveryVideoCard }) {
  return (
    <div className="@container relative h-full w-full min-h-[80cqw] cursor-pointer">
      <video
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full rounded-[max(7cqw,14px)] object-cover"
      />
      <div
        className="absolute inset-0 top-0 flex flex-col items-center justify-center rounded-[max(7cqw,14px)] text-white"
        style={{ background: "rgba(30,30,30,0.5)" }}
      >
        <Play className="h-9 w-9 fill-current" />
        <span className="mt-2 text-sm font-semibold">See Real Delivery</span>
      </div>
    </div>
  );
}

export { PuppyCardItem, VideoCardItem };
