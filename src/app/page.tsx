"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";

import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root options={{
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    }}>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Works />
        <Testimonials />
        <FAQs />
        <Contact />
      </div>
    </ReactLenis>
  );
}
