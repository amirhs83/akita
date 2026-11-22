import SiteHeader from "@/components/honestpet/SiteHeader";
import Hero from "@/components/honestpet/Hero";
import PuppiesExploreSection from "@/components/honestpet/PuppiesExploreSection";
import InfoSection from "@/components/honestpet/InfoSection";
import SiteFooter from "@/components/honestpet/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PuppiesExploreSection />
        <InfoSection />
      </main>
      <SiteFooter />
    </div>
  );
}
