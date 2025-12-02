'use client';

import Link from 'next/link';
import { PawPrint, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white mt-16 py-8 border-t border-[hsl(var(--border))]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-on-dark" />
            </div>
            <span className="text-lg font-semibold text-[hsl(var(--foreground))]">
              PAW & PAMPER
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              Terms
            </Link>
            <Link href="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              of Service
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center hover:shadow-md transition-all">
              <Facebook className="w-5 h-5 text-on-dark" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center hover:shadow-md transition-all">
              <Instagram className="w-5 h-5 text-on-dark" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center hover:shadow-md transition-all">
              <Twitter className="w-5 h-5 text-on-dark" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-[hsl(var(--muted-foreground))]">
          © 2024 Paw & Pamper - Greta Langmead Pet Care Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
