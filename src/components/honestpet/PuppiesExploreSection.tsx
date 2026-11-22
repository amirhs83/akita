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
    <section className="bg-[rgb(248,244,240)] pb-10 pt-[60px] max-md:pb-5 max-md:pt-10">
      <div className="mx-auto max-w-[1400px] px-12 max-md:px-5">
        {/* Title row */}
        <div className="mb-3 flex w-full items-center justify-between">
          <h2
            className="m-0 text-[clamp(30px,4vw,44px)] font-normal text-[#1a1a2e]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Explore All Puppies
          </h2>
          <span className="hidden shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full bg-[#ede9ff] px-6 py-2 text-xl font-normal leading-7 text-[#7c6fcd] sm:inline-flex">
            View all
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>

        {/* Search row */}
        <div className="mb-7 flex w-full">
          <div className="relative h-12 w-full max-w-[300px] rounded-3xl bg-[rgb(248,244,240)] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
            <span className="absolute inset-0 flex items-center gap-2 pl-4">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search puppies..."
                aria-label="Search puppies"
                className="h-full w-full border-none bg-transparent pr-3 text-[15px] text-[#012d43] outline-none placeholder:text-gray-400"
              />
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-[11px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item) =>
            item.type === "puppy" ? (
              <PuppyCardItem key={item.puppy.id} puppy={item.puppy} />
            ) : (
              <VideoCardItem key={item.video.id} video={item.video} />
            )
          )}
        </div>

        {/* See more */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#d5cfe8] bg-white px-10 py-3 text-lg font-medium text-[#6d5bd0] shadow-[0_2px_8px_rgba(26,26,46,0.06)]">
            See More
          </span>
        </div>
      </div>
    </section>
  );
}
