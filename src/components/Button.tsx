import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant?: "default" | "outline";
  link: string;
}

export default function Button({
  text,
  variant = "default",
  link,
}: ButtonProps) {
  const base = "";
  const variants: Record<string, string> = {
    default: "",
    outline: "",
  };
  const className = `${base} ${variants[variant] || variants.default}`;

  const content = (
    <div className="flex items-center">
      <div className="h-12 px-8 flex items-center bg-primary-300 group-hover:bg-primary-300/90 transition-colors rounded-full text-lg">
        {text}
      </div>
      <div className="h-12 w-12 flex items-center justify-center bg-primary-300 group-hover:bg-primary-300/90 transition-all rounded-full overflow-hidden relative">
        <ArrowUpRight
          size={24}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[200%] group-hover:-translate-y-[200%] transition-all duration-500 ease-in-out"
        />
        <ArrowUpRight
          size={24}
          className="absolute top-1/2 left-1/2 transform -translate-x-[200%] translate-y-[200%] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 ransition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );

  return (
    <Link href={link} className={`${className} group`}>
      {content}
    </Link>
  );
}
