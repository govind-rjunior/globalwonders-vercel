"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo and brand */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/new-logo.png"
            alt="Global Wonders logo"
            width={937}
            height={625}
            priority
            className="h-10 md:h-12 w-auto bg-white rounded-md p-1 shadow-sm"
          />
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/#home" className="hover:text-[#1B7A72] transition-colors">
            Home
          </a>
          <a href="/#about" className="hover:text-[#1B7A72] transition-colors">
            About
          </a>
          <a href="/#solutions" className="hover:text-[#1B7A72] transition-colors">
            Solutions
          </a>
          <a href="/#responsible" className="hover:text-[#1B7A72] transition-colors">
            Responsibility
          </a>
          <a href="/#process" className="hover:text-[#1B7A72] transition-colors">
            Process
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-xl bg-[#1B7A72] text-white hover:bg-[#156962] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#1B7A72]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-3">
            <a href="/#home" className="block py-2 hover:text-[#1B7A72] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="/#about" className="block py-2 hover:text-[#1B7A72] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="/#solutions" className="block py-2 hover:text-[#1B7A72] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </a>
            <a href="/#responsible" className="block py-2 hover:text-[#1B7A72] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Responsibility
            </a>
            <a href="/#process" className="block py-2 hover:text-[#1B7A72] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Process
            </a>
            <a
              href="/#contact"
              className="block w-full text-center px-3 py-2 rounded-xl bg-[#1B7A72] text-white hover:bg-[#156962] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}