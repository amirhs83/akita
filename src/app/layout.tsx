import type { Metadata } from "next";
import { Rubik, DM_Sans } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Puppies For Sale Online | Akita Club",
  description:
    "Find your perfect puppy with Akita Club – healthy, happy, and raised by trusted breeders. Every pup is vet-checked, backed by a 10-year health guarantee, microchipped, and delivered safely to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${dmSans.variable} antialiased bg-[#F6F1E8] text-[#1B2653]`}
        style={{ fontFamily: "var(--font-rubik), var(--font-dm-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
