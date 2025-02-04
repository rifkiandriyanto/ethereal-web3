export const metadata = {
  title: "Ethereal - Empowering the Web3 Revolution",
  description:
    "Ethereal is a cutting-edge decentralized platform bridging the gap between traditional web and Web3 technologies. Explore DeFi, NFTs, and blockchain innovations in a user-friendly environment.",
};

import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <TestimonialsCarousel />
      <Testimonials />
      <Cta />
    </>
  );
}
