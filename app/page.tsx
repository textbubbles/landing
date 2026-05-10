import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodeExample from "@/components/CodeExample";
import Starter from "@/components/Starter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
      <Starter />
      <Footer />
    </main>
  );
}
