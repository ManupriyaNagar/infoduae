// app/components/Header.tsx

"use client";
import { useState } from "react";
import { ChevronDown, ArrowRight, Volume2 } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black flex justify-between items-center px-6 md:px-12 py-3">
      {/* Left Logo Section */}
      <div className="flex items-center gap-3">
        {/* Logo 1 */}
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
          <Image src="/logo1.png" alt="Logo" width={28} height={28} />
        </div>
        {/* Logo 2 */}
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
          <Image src="/logo2.png" alt="Logo" width={28} height={28} />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-[#1a1a1a] rounded-full px-6 py-2 flex items-center gap-6 text-white text-sm">
        <a href="#" className="hover:text-teal-400 transition">Home</a>

        {/* Collective with dropdown */}
        <div
          className="relative group flex items-center gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hover:text-teal-400 transition">Collective</span>
          <ChevronDown size={16} className="text-teal-400" />
          {menuOpen && (
            <div className="absolute top-8 left-0 bg-black border border-gray-700 rounded-md p-2 w-40">
              <a href="#" className="block px-3 py-2 hover:bg-gray-800">Option 1</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-800">Option 2</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-teal-400 transition">Models</a>
        <a href="#" className="hover:text-teal-400 transition">About</a>
        <a href="#" className="hover:text-teal-400 transition">Blog</a>

        {/* Contact Button */}
        <a
          href="#"
          className="ml-4 bg-teal-400 text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-teal-300 transition"
        >
          Contact <ArrowRight size={18} />
        </a>
      </nav>

      {/* Right Icon */}
      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
        <Volume2 size={20} className="text-teal-400" />
      </div>
    </header>
  );
}
