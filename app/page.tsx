import { Atmosphere } from "@/components/home/Atmosphere";
import { ContactStrip } from "@/components/home/ContactStrip";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { PopularMenu } from "@/components/home/PopularMenu";
import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#111111]">
        <Hero />
        <Features />
        <PopularMenu />
        <Atmosphere />
        <ContactStrip />
      </main>
      <BottomNav />
    </>
  );
}
