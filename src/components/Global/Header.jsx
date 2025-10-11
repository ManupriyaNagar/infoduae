// app/components/Header.tsx
"use client";
import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-black sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        {/* Left Logo Section */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-semibold">InfoD</h1>
            <p className="text-white text-[0.6rem] mt-1">Investment consultancy</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex bg-[#1a1a1a] rounded-full px-6 py-4 items-center gap-6 text-white text-lg">
          <a href="/" className="hover:text-[#00FFAA] transition">Home</a>
          <a href="/about" className="hover:text-[#00FFAA] transition">About</a>
          <a href="/service" className="hover:text-[#00FFAA] transition">Service</a>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="ml-4 bg-[#00FFAA] text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-[#00FFAA]/80 transition"
          >
            Contact <ArrowRight size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-gray-800 text-white flex flex-col items-center py-6 space-y-4 animate-fadeIn">
          <a
            href="/"
            className="hover:text-[#00FFAA] transition text-lg"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-[#00FFAA] transition text-lg"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="/service"
            className="hover:text-[#00FFAA] transition text-lg"
            onClick={closeMenu}
          >
            Service
          </a>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] px-6 py-2 rounded-full flex items-center gap-2"
            onClick={closeMenu}
          >
            Contact <ArrowRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}