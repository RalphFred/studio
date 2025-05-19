"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  ease?: string;
  startDelay?: number;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 1, 
  ease = "power2.out",
  startDelay = 0
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        delay: startDelay + delay,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
} 