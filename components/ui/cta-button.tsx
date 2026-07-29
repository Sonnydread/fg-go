"use client";

import { Leaf } from "lucide-react";

interface CalltoActionProps {
  onClick?: () => void;
}

export default function CtaButton({
  onClick,
}: CalltoActionProps) {
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={onClick}
        className="relative inline-flex h-20 overflow-hidden rounded-full p-0.75 focus:outline-none"
      >
         </button>
      <button className="relative cursor-pointer inline-flex md:h-20 h-16 overflow-hidden rounded-full p-0.75 focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9EFFB7_0%,#052914_25%,#00E676_90%,#052914_95%,#052914_80%)]" />
        <span className="relative inline-flex h-full w-full items-center justify-center gap-4 rounded-full bg-[#052914] md:px-6 px-8 md:text-lg text-sm font-semibold uppercase text-white backdrop-blur-xl shadow-[0_0_85px_rgba(0,255,120,0.85)] text-nowrap transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,255,120,0.45)]">
          <Leaf className="md:h-7 md:w-7 h-5 w-5 text-green-400" />
          Envíanos un WhatsApp
        </span>
      </button>
    </div>
  );
};

