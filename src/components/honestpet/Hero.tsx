"use client";

import Image from "next/image";
import { Search, ShieldCheck, ShieldPlus, Truck, Award, Headphones, Star } from "lucide-react";
import { trustItems, statsItems } from "@/data/puppies";

const trustIconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck className="h-6 w-6" />,
  "shield-plus": <ShieldPlus className="h-6 w-6" />,
  truck: <Truck className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  headphones: <Headphones className="h-6 w-6" />,
};

const statIconMap: Record<string, React.ReactNode> = {
  google: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  ),
  paw: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <circle cx="5.5" cy="9" r="2" />
      <circle cx="9.5" cy="5.5" r="2" />
      <circle cx="14.5" cy="5.5" r="2" />
      <circle cx="18.5" cy="9" r="2" />
      <path d="M12 10c-2.5 0-5.5 2.6-5.5 5.4 0 1.8 1.2 3.1 2.9 3.1 1.1 0 1.8-.4 2.6-.4s1.5.4 2.6.4c1.7 0 2.9-1.3 2.9-3.1C17.5 12.6 14.5 10 12 10z" />
    </svg>
  ),
  shield: <ShieldCheck className="h-5 w-5" />,
  truck: <Truck className="h-5 w-5" />,
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section className="relative z-[3]">
      {/* Hero background */}
      <div className="relative min-h-[660px] max-md:min-h-[460px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/assets/hero-banner.webp"
            alt="Happy puppy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(100deg, rgba(18,14,44,0.85) 0%, rgba(18,14,44,0.72) 24%, rgba(18,14,44,0.38) 42%, rgba(18,14,44,0) 56%, rgba(18,14,44,0) 100%)",
          }}
        />

        {/* Inner content */}
        <div className="relative z-[2] mx-auto flex max-w-[1280px] items-center justify-between gap-12 px-8 pb-24 pt-[84px] max-md:flex-col max-md:px-5 max-md:pb-14 max-md:pt-16">
          {/* Left column */}
          <div className="flex-1 text-white max-md:max-w-[560px]">
            <h1
              className="mb-5 text-[clamp(30px,6.8vw,46px)] font-normal leading-[1.08] tracking-[-0.5px]"
              style={{ fontFamily: "var(--font-rubik), sans-serif" }}
            >
              Placing Happy Pups
              <br />
              in{" "}
              <span
                className="text-[#c2a6ff]"
                style={{
                  background:
                    "linear-gradient(100deg, #d8c4ff 0%, #9b7cff 33.3%, #f3edff 46%, #d8c4ff 66.6%, #9b7cff 100%)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Loving Homes
              </span>
            </h1>
            <p className="mb-8 max-w-[440px] text-[17px] leading-[1.5] text-white/90">
              Every puppy is vet-checked, backed by our health guarantee, and delivered safely to your
              home.
            </p>

            {/* Search bar */}
            <div className="flex max-w-[440px] items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 shadow-[0_10px_30px_rgba(20,12,60,0.28)]">
              <Search className="h-5 w-5 shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Search any breed"
                aria-label="Search any breed"
                className="min-w-0 flex-1 border-none bg-transparent text-base font-normal text-[#2a2640] outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                aria-label="Search"
                className="flex h-[46px] w-[46px] shrink-0 cursor-pointer items-center justify-center rounded-full text-white"
                style={{
                  background: "linear-gradient(180deg, rgb(146,119,255) 0%, rgb(123,92,255) 55%, rgb(106,71,245) 100%)",
                }}
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Social proof row */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center">
                {["/assets/goog1.webp", "/assets/goog2.webp", "/assets/goog3.webp", "/assets/goog4.webp"].map(
                  (src, i) => (
                    <div
                      key={src}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white/70"
                      style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 4 - i }}
                    >
                      <Image src={src} alt={`Happy family ${i + 1}`} fill sizes="36px" className="object-cover" />
                    </div>
                  )
                )}
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <span className="flex items-center">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </span>
                  <span className="text-lg font-bold text-white">4.9</span>
                </div>
                <span className="text-sm font-medium text-white/85">
                  3,000+ Families • 4.9-Star Google Rating
                </span>
              </div>
            </div>
          </div>

          {/* Trust card (desktop) */}
          <aside
            className="hidden w-[344px] shrink-0 rounded-3xl border border-white/55 p-4 pb-2 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:block"
            style={{
              background: "rgba(24,21,40,0.66)",
              backdropFilter: "blur(14px) saturate(115%)",
              WebkitBackdropFilter: "blur(14px) saturate(115%)",
            }}
          >
            <h3 className="mb-4 whitespace-nowrap text-lg font-medium text-white">Why Families Trust HonestPet</h3>
            <div className="flex flex-col">
              {trustItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3.5 ${i < trustItems.length - 1 ? "border-b border-white/10 pb-2.5 mb-2.5" : ""}`}
                >
                  <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(180deg, #9279ff 0%, #7b5cff 100%)" }}>
                    {trustIconMap[item.icon]}
                  </span>
                  <div className="min-w-0 pt-1">
                    <p className="text-[15.5px] font-semibold leading-snug text-white">{item.title}</p>
                    <p className="mt-0.5 text-[13.5px] leading-snug text-white/75">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-[5] mx-auto -mt-[45px] max-w-[1180px] px-8 max-md:px-5">
        <div
          className="flex items-stretch rounded-2xl border border-[rgba(124,111,205,0.35)] bg-white px-2 py-2.5 shadow-[0_6px_22px_rgba(26,26,46,0.12)]"
        >
          {statsItems.map((stat, i) => (
            <div
              key={stat.small}
              className={`flex flex-1 items-center justify-center gap-3 px-4 py-0.5 max-md:basis-1/2 max-md:flex-grow-0 max-md:justify-start max-md:px-2.5 max-md:py-2 ${
                i > 0 ? "border-l border-[#f0ebe3] max-md:nth-[3]:border-l-0" : ""
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efeaff] text-[#7c6fcd]">
                {statIconMap[stat.icon]}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[17px] font-bold text-[#1a1a2e]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {stat.big}
                </span>
                <span className="text-[13px] text-[#6b7080]">{stat.small}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
