"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { navItems } from "@/data/puppies";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-[1000] w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "shadow-[0_1px_0_rgba(0,0,0,0.05)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-5 md:px-8">
        {/* Logo */}
        <span className="flex shrink-0 cursor-pointer select-none items-center gap-2.5" aria-label="AkitaClub.ir Logo">
          <Image
            src="/assets/akitaclub-logo-v2.webp"
            alt="AkitaClub.ir Logo"
            width={88}
            height={88}
            priority
            className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
          />
          <span
            className="inline text-[16px] font-bold leading-none text-[#1B2653] sm:text-[19px] 2xl:text-[21px]"
            style={{ fontFamily: "var(--font-rubik), sans-serif" }}
          >
            AkitaClub<span className="text-[#B98A2E]">.ir</span>
          </span>
        </span>

        {/* Nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-3 lg:flex xl:gap-x-5" aria-label="Main navigation">
          {navItems.map((item) => (
            <span
              key={item.label}
              className={`inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap pb-0.5 text-[13px] font-semibold leading-5 transition-colors xl:text-[15px] ${
                item.active ? "text-[#1B2653]" : "text-[#1f1b38]/75"
              }`}
              style={item.active ? { boxShadow: "inset 0 -2px 0 0 #E9B84E" } : undefined}
            >
              {item.label}
              {item.dropdown && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
            </span>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3.5">
          <span className="hidden text-sm font-medium text-[#1f1b38] 2xl:inline-block">8am - midnight</span>
          <span className="hidden items-center gap-2.5 rounded-[14px] bg-[#F7DFB0] px-5 py-2.5 text-[#4C3D1E] transition-colors hover:bg-[#F5D89C] sm:flex">
            <Phone className="h-4 w-4 fill-current" />
            <span className="text-[15px] font-semibold">Call Us</span>
          </span>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#e2e2ec] bg-white text-black"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
