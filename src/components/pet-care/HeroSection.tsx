'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] rounded-[var(--radius)] overflow-hidden shadow-lg">
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
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Serving Marina Del Rey, Venice,<br />
          Westchester, Playa Del Rey<br />
          & Santa Monica
        </h1>

        <button className="mt-6 px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-semibold text-lg hover:shadow-xl transition-all hover:scale-105">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}
