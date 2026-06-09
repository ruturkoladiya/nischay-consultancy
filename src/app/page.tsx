import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden flex flex-col">
      <Navbar />
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <Process />
      <WhyChooseUs />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
