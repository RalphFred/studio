"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Copy from "./Copy";

const faqs = [
  {
    question: "What is Bayt?",
    answer:
      "Bayt is a property management platform designed to simplify and streamline property operations for landlords and property managers.",
  },
  {
    question: "Who is Bayt suitable for?",
    answer:
      "Bayt is suitable for landlords, property managers, and real estate professionals looking to manage their properties efficiently.",
  },
  {
    question: "Do I need design or coding skills to use Bayt?",
    answer:
      "No, Bayt is user-friendly and requires no design or coding skills to get started.",
  },
  {
    question: "Can I customize the template to match my brand?",
    answer:
      "Yes, Bayt allows you to customize the look and feel to match your brand.",
  },
  {
    question: "Is Bayt mobile-friendly?",
    answer:
      "Absolutely! Bayt is fully responsive and works great on all devices.",
  },
  {
    question: "Can I use Bayt for commercial purposes?",
    answer:
      "Yes, Bayt can be used for both personal and commercial property management.",
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="wrapper py-24">
      <Copy>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
      </Copy>

      <div className="max-w-3xl mx-auto bg-neutral-100 rounded-2xl p-2 md:p-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="">
            <button
              className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none transition-colors"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className="text-lg font-medium">{faq.question}</span>

              <ChevronDown
                className={`w-6 h-6 text-neutral-800 transform transition-transform duration-300 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIdx === idx
                  ? "max-h-40 opacity-100 py-2 px-4"
                  : "max-h-0 opacity-0 py-0 px-4"
              }`}
            >
              <p className="text-gray-700 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
