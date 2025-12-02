'use client';

import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] rounded-[var(--radius)] overflow-hidden shadow-lg mb-8 animate-fadeIn">
      {/* Hero Image */}
      <Image
        src="/generated/hero-dogs-park.jpg"
        alt="Happy dogs playing in park"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4 animate-fadeIn">
          <MapPin className="w-4 h-4" />
          <span>Serving West LA & Beach Communities</span>
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-slideInLeft">
          Professional Pet Care<br />
          You Can Trust
        </h1>

        <p className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl drop-shadow animate-slideInRight">
          Serving Marina Del Rey, Venice, Westchester, Playa Del Rey & Santa Monica
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-scaleIn">
          <button className="px-8 py-4 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-semibold text-lg hover:shadow-xl transition-all hover:scale-105">
            Book Free Consultation
          </button>
          <button className="px-8 py-4 rounded-[var(--radius-button)] bg-white/20 backdrop-blur-sm text-white border-2 border-white font-semibold text-lg hover:bg-white/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
