"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, Lock, ArrowRight, PawPrint, Heart, ShieldCheck, User, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { footerColumns } from "@/data/puppies";

const colIconMap: Record<string, React.ReactNode> = {
  paw: <PawPrint className="h-4 w-4" />,
  heart: <Heart className="h-4 w-4" />,
  shield: <ShieldCheck className="h-4 w-4" />,
  user: <User className="h-4 w-4" />,
};

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#141C38] pb-7 pt-14 text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col px-8 max-md:px-5">
        {/* Top row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <span className="flex cursor-pointer select-none items-center gap-2.5" aria-label="AkitaClub.ir Logo">
            <Image
              src="/assets/akitaclub-logo.webp"
              alt="AkitaClub.ir Logo"
              width={88}
              height={88}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span
              className="text-[20px] font-bold leading-none text-white"
              style={{ fontFamily: "var(--font-rubik), sans-serif" }}
            >
              AkitaClub<span className="text-[#F7DFB0]">.ir</span>
            </span>
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-3 text-[15px] text-white/90">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(247,223,176,0.15)] text-[#F7DFB0]">
                <Phone className="h-4 w-4" />
              </span>
              (855) 374-1985
            </span>
            <span className="hidden h-6 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-3 text-[15px] text-white/90">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(247,223,176,0.15)] text-[#F7DFB0]">
                <Mail className="h-4 w-4" />
              </span>
              support@akitaclub.ir
            </span>
          </div>
        </div>

        {/* Middle row */}
        <div className="flex flex-wrap gap-8 max-lg:flex-col">
          {/* Nav grid */}
          <nav className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4" aria-label="Footer navigation">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-5 flex items-center gap-2.5 text-[15px] font-bold text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(247,223,176,0.15)] text-[#F7DFB0]">
                    {colIconMap[col.icon]}
                  </span>
                  {col.title}
                </h3>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="cursor-pointer text-[15px] text-white/70 transition-colors hover:text-white">{link}</span>
                    </li>
                  ))}
                </ul>
                {col.viewAll && (
                  <span className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#F7DFB0]">
                    View All Breeds
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Side column */}
          <div className="flex w-full flex-col gap-4 lg:w-[340px]">
            {/* Subscribe card */}
            <div className="rounded-2xl border border-white/10 bg-[#1B2444] p-5">
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(247,223,176,0.15)] text-[#F7DFB0]">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="mb-0.5 text-base font-bold text-white">Stay in the loop</p>
                  <p className="text-[13px] leading-snug text-white/60">Get puppy updates, tips, and exclusive offers.</p>
                </div>
              </div>
              <form className="flex overflow-hidden rounded-xl bg-[rgba(255,255,255,0.06)]" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 border-none bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex w-12 shrink-0 cursor-pointer items-center justify-center bg-[#F7DFB0] text-[#4C3D1E] transition-colors hover:bg-[#F5D89C]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Secure payments card */}
            <div className="rounded-2xl border border-white/10 bg-[#1B2444] p-4">
              <div className="mb-3 flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(247,223,176,0.15)] text-[#F7DFB0]">
                  <Lock className="h-4 w-4" />
                </span>
                <p className="text-[13px] leading-snug text-white/80">
                  <strong className="font-bold text-white">Secure payments.</strong> Protected with TLS encryption.
                </p>
              </div>
              <div className="relative ml-12 h-[22px] w-[230px]">
                <Image
                  src="/assets/payment-logos.webp"
                  alt="Payment methods: Visa, Mastercard, American Express, Discover, Apple Pay, Klarna, Afterpay"
                  fill
                  sizes="230px"
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="my-7 h-px w-full bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
            <span>© 2026 Akita Club</span>
            <span className="text-white/25">|</span>
            <span className="cursor-pointer hover:text-white/80">Privacy Policy</span>
            <span className="text-white/25">|</span>
            <span className="cursor-pointer hover:text-white/80">Terms of Service</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-white">Follow Us</span>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white/80 transition-colors hover:bg-[rgba(247,223,176,0.25)]" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white/80 transition-colors hover:bg-[rgba(247,223,176,0.25)]" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white/80 transition-colors hover:bg-[rgba(247,223,176,0.25)]" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white/80 transition-colors hover:bg-[rgba(247,223,176,0.25)]" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
