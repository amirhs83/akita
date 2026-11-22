"use client";

import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { buildGridItems } from "@/data/puppies";
import { PuppyCardItem, VideoCardItem } from "./PuppyCards";

export default function PuppiesExploreSection() {
  const [query, setQuery] = useState("");
  const gridItems = buildGridItems();
  const visible = gridItems.filter((item) => {
    if (item.type !== "puppy") return true;
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    return (
      item.puppy.name.toLowerCase().includes(q) ||
      item.puppy.breed.toLowerCase().includes(q)
    );
  });

  return (
    <section className="bg-[#F6F1E8] pb-10 pt-[60px] max-md:pb-8 max-md:pt-10">
      <div className="mx-auto max-w-[1400px] px-12 max-md:px-3 sm:max-md:px-5">
        {/* Title row */}
        <div className="mb-3 flex w-full items-center justify-between gap-3">
          <h2
            className="m-0 text-[clamp(26px,4vw,44px)] font-normal text-[#1B2653]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Explore All Puppies
          </h2>
          <span className="hidden shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full bg-[#F8EDD4] px-6 py-2 text-xl font-normal leading-7 text-[#A1761D] transition-colors hover:bg-[#F5E5C2] sm:inline-flex">
            View all
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>

        {/* Search row */}
        <div className="mb-7 flex w-full max-md:mb-5">
          <div className="relative h-12 w-full max-w-[340px] rounded-full bg-white shadow-[0_1px_4px_rgba(26,26,46,0.08)] ring-1 ring-[#E9E0CE] max-md:h-11">
            <span className="absolute inset-0 flex items-center gap-2 pl-4">
              <Search className="h-4 w-4 shrink-0 text-gray-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search puppies..."
                aria-label="Search puppies"
                className="h-full w-full border-none bg-transparent pr-3 text-[15px] text-[#1B2653] outline-none placeholder:text-gray-400"
              />
            </span>
          </div>
        </div>

        {/* Grid — always 2 columns on mobile like the reference design */}
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-3 sm:gap-x-3.5 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-[11px] xl:grid-cols-4">
          {visible.map((item) =>
            item.type === "puppy" ? (
              <PuppyCardItem key={item.puppy.id} puppy={item.puppy} />
            ) : (
              <VideoCardItem key={item.video.id} video={item.video} />
            )
          )}
        </div>

        {/* See more — cream CTA matching the card buttons */}
        <div className="mt-8 flex justify-center max-md:mt-6">
          <span className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#F7DFB0] px-10 py-3 text-lg font-bold text-[#4C3D1E] shadow-[0_2px_8px_rgba(26,26,46,0.08)] transition-colors hover:bg-[#F5D89C]">
            See More
          </span>
        </div>
      </div>
    </section>
  );
}
