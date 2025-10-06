// app/components/Header.tsx

"use client";
import { useState } from "react";
import { ChevronDown, ArrowRight, Volume2 } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Left Logo Section */}
        <div className="flex items-center gap-3">
          {/* Logo 1 */}
          <h1 className="text-white text-4xl">Infod</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-[#1a1a1a] rounded-full px-6 py-4 flex items-center gap-6 text-white text-lg">
          <a href="#" className="hover:text-[#00FFAA] transition">Home</a>
          <a href="#" className="hover:text-[#00FFAA] transition">About</a>
          <a href="#" className="hover:text-[#00FFAA] transition">Service</a>
          {/* Contact Button */}

        </nav>

        {/* Right Icon */}
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
          <a
            href="#"
            className="ml-4 bg-[#00FFAA] text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-[#00FFAA] transition"
          >
            Contact <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
