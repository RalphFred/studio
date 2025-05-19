"use client";
import React, { useState } from "react";
import Button from "./Button";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="wrapper w-full py-4 flex items-center justify-between fixed top-0 left-0 z-50 bg-white">
      {/* Left: Logo/Brand */}
      <div className="font-semibold tracking-tight text-xl">studio.raphael</div>

      {/* Center: Navigation Links */}
      <div className="hidden lg:flex gap-6 font-medium">
        <a href="#welcome" className="hover:text-primary-400 transition">
          Welcome
        </a>
        <a href="#services" className="hover:text-primary-400 transition">
          Services
        </a>
        <a href="#work" className="hover:text-primary-400 transition">
          Work
        </a>
        <a href="#faqs" className="hover:text-primary-400 transition">
          FAQs
        </a>
        <a href="#testimonials" className="hover:text-primary-400 transition">
          Testimonials
        </a>
      </div>

      {/* Right: Actions */}
      <div className="hidden lg:block">
        <Button text="Let's Build" link="/" />
      </div>

      <div className="lg:hidden w-12 h-12 rounded-full bg-primary-300 flex flex-col justify-center items-center gap-2 cursor-pointer" onClick={() => setMenuOpen((open) => !open)}>
        <span
          className={`block w-6 h-[2px] rounded-full bg-neutral-900 transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-[2px] rounded-full bg-neutral-900 transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {menuOpen && (
        <div className="fixed top-[80px] right-4 w-52 sm:w-64 bg-primary-300 rounded-xl shadow-lg p-4 flex flex-col gap-4 z-50 animate-fade-in lg:hidden sm:text-lg"
             style={{ animation: "fadeIn 0.3s" }}>
          <a href="#welcome" className="hover:text-primary-400 transition">Home</a>
          <a href="#services" className="hover:text-primary-400 transition">Services</a>
          <a href="#work" className="hover:text-primary-400 transition">Work</a>
          <a href="#faqs" className="hover:text-primary-400 transition">FAQs</a>
          <a href="#testimonials" className="hover:text-primary-400 transition">Testimonials</a>
        </div>
      )}
    </nav>
  );
}
