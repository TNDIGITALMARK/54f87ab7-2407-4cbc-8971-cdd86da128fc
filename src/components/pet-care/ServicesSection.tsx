'use client';

import { PawPrint, Clock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, price, duration, icon }: ServiceCardProps) {
  return (
    <div className="relative group">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[hsl(var(--primary))]/20 transition-all group-hover:border-[hsl(var(--primary))]/40 group-hover:bg-white">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center mb-6 shadow-lg">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl text-[hsl(var(--foreground))] font-semibold mb-3">
            {title}
          </h3>

          {/* Price */}
          <div className="text-4xl font-bold text-[hsl(var(--price))] mb-2">
            ${price}
          </div>

          {/* Duration */}
          <p className="text-[hsl(var(--muted-foreground))] text-sm mb-6 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </p>

          {/* CTA Button */}
          <button className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold hover:shadow-xl transition-all hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: '30min walks',
      price: '25',
      duration: '30 minutes',
      icon: <PawPrint className="w-8 h-8 text-on-dark" />,
    },
    {
      title: '60min walks',
      price: '40',
      duration: '60 minutes',
      icon: <PawPrint className="w-8 h-8 text-on-dark" />,
    },
    {
      title: 'Pet Sitting',
      price: '25',
      duration: 'per hour',
      icon: <PawPrint className="w-8 h-8 text-on-dark" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[hsl(var(--background))] to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--secondary))]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--foreground))] mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
            Professional dog walking and pet sitting services tailored to your needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-8 text-center text-2xl">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-5 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-[hsl(var(--border))]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white font-bold text-xl">+$5</span>
              </div>
              <div>
                <p className="text-[hsl(var(--foreground))] font-semibold text-lg mb-1">
                  Multiple Pets
                </p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">
                  Each additional dog or cat
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-[hsl(var(--border))]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white font-bold text-xl">+$10</span>
              </div>
              <div>
                <p className="text-[hsl(var(--foreground))] font-semibold text-lg mb-1">
                  After Hours
                </p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">
                  Evening or weekend visits
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-[hsl(var(--muted-foreground))] text-sm mt-6">
            All prices in USD • Custom packages available • Discounts for recurring bookings
          </p>
        </div>
      </div>
    </section>
  );
}
