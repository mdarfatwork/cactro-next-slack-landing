import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import { TracingBeamDemo } from "@/components/ui/TracingBeam";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-11/12 max-w-6xl mx-auto p-4">
      <Navbar />
      <Hero/>
      <Companies />
      <TracingBeamDemo/>
      <Footer/>
    </main>
  );
}