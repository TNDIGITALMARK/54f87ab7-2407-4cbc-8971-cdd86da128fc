'use client';

import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-[hsl(var(--foreground))]">
              PAW & PAMPER
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/testimonials"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="/gallery"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-medium hover:shadow-md transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
