"use client";

import React, { useRef, ReactNode, useEffect, ElementType } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimationOptions {
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  start?: string;
  once?: boolean;
}

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  animationOptions?: AnimationOptions;
  className?: string;
  ariaLabel?: string;
}

export default function Copy({
  children,
  animateOnScroll = true,
  animationOptions = {},
  className = "",
  ariaLabel,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const animation = useRef<gsap.core.Tween | null>(null);

  // Default animation options
  const defaultOptions: AnimationOptions = {
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    delay: 0,
    start: "top 75%",
    once: true,
  };

  const finalOptions = { ...defaultOptions, ...animationOptions };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      try {
        // Reset refs
        splitRefs.current = [];
        lines.current = [];
        elementRefs.current = [];

        // Get elements to animate
        let elements: HTMLElement[] = [];
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children).filter(
            (el): el is HTMLElement => el instanceof HTMLElement
          );
        } else {
          elements = [containerRef.current];
        }

        // Process each element
        elements.forEach((element) => {
          elementRefs.current.push(element);

          // Split text into lines
          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
            lineThreshold: 0.1,
          });

          splitRefs.current.push(split);

          // Handle text indentation
          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              const firstLine = split.lines[0];
              if (firstLine instanceof HTMLElement) {
                firstLine.style.paddingLeft = textIndent;
              }
            }
            element.style.textIndent = "0";
          }

          lines.current.push(...split.lines.filter((line): line is HTMLElement => line instanceof HTMLElement));
        });

        // Set initial state
        gsap.set(lines.current, { y: "100%", opacity: 0 });

        // Create animation
        const animationProps = {
          y: "0%",
          opacity: 1,
          duration: finalOptions.duration,
          stagger: finalOptions.stagger,
          ease: finalOptions.ease,
          delay: finalOptions.delay,
        };

        if (animateOnScroll) {
          animation.current = gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: finalOptions.start,
              once: finalOptions.once,
            },
          });
        } else {
          animation.current = gsap.to(lines.current, animationProps);
        }
      } catch (error) {
        console.error("Error in Copy component animation:", error);
      }

      // Cleanup function
      return () => {
        try {
          // Kill GSAP animations
          if (animation.current) {
            animation.current.kill();
          }

          // Revert SplitText
          splitRefs.current.forEach((split) => {
            if (split) {
              split.revert();
            }
          });

          // Clear refs
          splitRefs.current = [];
          lines.current = [];
          elementRefs.current = [];
        } catch (error) {
          console.error("Error cleaning up Copy component:", error);
        }
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, animationOptions] }
  );

  // Handle component unmount
  useEffect(() => {
    return () => {
      if (animation.current) {
        animation.current.kill();
      }
    };
  }, []);

  // Render single child or wrapper
  if (React.Children.count(children) === 1) {
    const child = children as React.ReactElement;
    const childProps = child?.props || {};
    const ChildComponent = child.type as ElementType;
    
    // Add type checking for ChildComponent
    if (!ChildComponent || typeof ChildComponent === 'undefined') {
      console.error('Invalid child component type in Copy component');
      return null;
    }

    return (
      <ChildComponent
        {...childProps}
        ref={containerRef}
        aria-label={ariaLabel}
        className={`${(childProps as { className?: string }).className || ""} ${className}`.trim()}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </div>
  );
}
