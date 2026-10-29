
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import MovieSection from "@/components/home/MovieSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Header />
      <HeroBanner />
      <MovieSection />
    </main>
  );
}
