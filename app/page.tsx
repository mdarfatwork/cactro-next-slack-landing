import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";

export default function Home() {
  return (
    <main className="w-11/12 max-w-6xl mx-auto p-4">
      <Navbar />
      <Hero/>
      <Companies />
    </main>
  );
}