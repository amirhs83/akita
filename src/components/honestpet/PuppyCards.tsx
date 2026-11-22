"use client";

import Image from "next/image";
import { Share2, Video, Play } from "lucide-react";
import type { Puppy, DeliveryVideoCard } from "@/data/puppies";

function PuppyCardItem({ puppy }: { puppy: Puppy }) {
  return (
    <div className="group flex w-full cursor-pointer justify-center" id={`pet-card-${puppy.id}`}>
      <div className="flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_18px_rgba(26,26,46,0.08)] transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(26,26,46,0.14)]">
        {/* Photo */}
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-t-3xl" style={{ aspectRatio: "1 / 1.19" }}>
          <Image
            src={puppy.image}
            alt={`Image of ${puppy.name}`}
            fill
            sizes="(max-width: 700px) 50vw, (max-width: 1190px) 33vw, 26rem"
            className="object-cover object-[center_top]"
          />

          {/* Video pill (top-left) */}
          {puppy.hasVideo && (
            <span className="absolute left-3 top-3 z-[3] inline-flex h-7 items-center gap-[5px] rounded-full bg-black/35 pl-2.5 pr-[10px] text-[12.5px] font-normal leading-none text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.25)]">
              <Video className="h-3.5 w-3.5" />
              Video
            </span>
          )}

          {/* Share button (top-right) */}
          <span
            className="absolute right-3 top-3 z-[3] flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.25)]"
            style={{ background: "rgba(0,0,0,0.35)" }}
            aria-label={`Share ${puppy.name}`}
          >
            <Share2 className="h-4 w-4" />
          </span>

          {/* Bottom badges */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between p-3">
            <span>
              {puppy.readyNow && (
                <span
                  className="inline-flex h-[1.55rem] items-center whitespace-nowrap rounded-full px-[7px] text-[11.2px] font-medium text-[#058a3a]"
                  style={{
                    background: "linear-gradient(rgba(57,255,20,0.24), rgba(57,255,20,0.24)), rgba(255,255,255,0.92)",
                    boxShadow: "inset 0 0 0 1px rgba(34,220,70,0.45)",
                  }}
                >
                  Ready Now
                </span>
              )}
            </span>
            <span className="flex items-center gap-1">
              {puppy.mini && (
                <span className="inline-flex h-[1.45rem] items-center rounded-full bg-black/45 px-2.5 text-[12.5px] font-normal text-white">
                  Mini
                </span>
              )}
              {puppy.generation && (
                <span className="inline-flex h-[1.45rem] items-center rounded-full bg-black/45 px-2.5 text-[12.5px] font-normal text-white">
                  {puppy.generation}
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col px-5 pb-5 pt-4">
          <div className="flex items-baseline justify-between gap-3">
            <span className="whitespace-nowrap text-xl font-normal leading-tight text-[#111827]">{puppy.name}</span>
            <span className="whitespace-nowrap text-xl font-normal text-[#4b5563]">{puppy.price}</span>
          </div>
          <p className="mt-0.5 text-sm text-[#6b7280]">{puppy.breed}</p>

          <div className="mt-3 flex flex-wrap justify-center gap-2 text-[13.4px]">
            <span
              className="inline-flex min-w-[3.2em] items-center justify-center rounded-full px-[0.85em] py-[0.4em] font-semibold"
              style={{
                background: puppy.gender === "Male" ? "rgba(240,249,255,0.95)" : "rgba(253,242,248,0.95)",
                color: puppy.gender === "Male" ? "#0c4a6e" : "#cc1f6a",
                boxShadow: puppy.gender === "Male" ? "inset 0 0 0 1px rgba(125,211,252,0.9)" : "inset 0 0 0 1px rgba(249,168,212,0.9)",
              }}
            >
              {puppy.gender}
            </span>
            <span
              className="inline-flex min-w-[3.2em] items-center justify-center rounded-full px-[0.85em] py-[0.4em] font-normal"
              style={{
                background: puppy.gender === "Male" ? "rgba(240,249,255,0.95)" : "rgba(253,242,248,0.95)",
                color: puppy.gender === "Male" ? "#0c4a6e" : "#cc1f6a",
                boxShadow: puppy.gender === "Male" ? "inset 0 0 0 1px rgba(125,211,252,0.9)" : "inset 0 0 0 1px rgba(249,168,212,0.9)",
              }}
            >
              {puppy.weeks}
            </span>
          </div>

          <button
            type="button"
            className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-[1.15rem] font-medium text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-transform duration-150 hover:brightness-[1.03]"
            style={{ background: "linear-gradient(to bottom, #6ee7b7 0%, #14b8a6 100%)" }}
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
    <div className="relative h-full min-h-[380px] w-full cursor-pointer">
      <video
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full rounded-3xl object-cover"
      />
      <div
        className="absolute inset-0 top-0 flex flex-col items-center justify-center rounded-3xl text-white"
        style={{ background: "rgba(30,30,30,0.5)" }}
      >
        <Play className="h-9 w-9 fill-current" />
        <span className="mt-2 text-sm font-semibold">See Real Delivery</span>
      </div>
    </div>
  );
}

export { PuppyCardItem, VideoCardItem };
