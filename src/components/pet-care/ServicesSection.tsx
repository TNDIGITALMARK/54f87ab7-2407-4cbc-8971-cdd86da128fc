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
    <div className="bg-white rounded-[var(--radius)] p-8 shadow hover:shadow-lg transition-all">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[hsl(var(--foreground))] font-semibold mb-2">
          {title}
        </h3>

        {/* Price */}
        <div className="price-text mb-2">
          ${price}
        </div>

        {/* Duration */}
        <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4 flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {duration}
        </p>

        {/* CTA Button */}
        <button className="w-full mt-4 px-6 py-2.5 rounded-[var(--radius-button)] bg-[hsl(var(--primary))] text-white font-medium hover:shadow-md transition-all hover:scale-102">
          Book Now
        </button>
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
      icon: <PawPrint className="w-8 h-8 text-white" />,
    },
    {
      title: '60min walks',
      price: '40',
      duration: '60 minutes',
      icon: <PawPrint className="w-8 h-8 text-white" />,
    },
    {
      title: 'Pet Sitting',
      price: '25',
      duration: 'per hour',
      icon: <PawPrint className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-[hsl(var(--foreground))] mb-4">
          Our Services & Pricing
        </h2>
        <div className="inline-block px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--primary))] text-white font-semibold text-lg shadow-md">
          Dog Walking & Pet Sitting Services
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Additional Pricing Info */}
      <div className="mt-8 p-8 bg-gradient-to-br from-white to-[hsl(var(--muted))] rounded-[var(--radius)] shadow-md card-hover">
        <h3 className="font-semibold text-[hsl(var(--foreground))] mb-6 text-center text-xl">
          Additional Services & Fees
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-white font-bold">
              +5
            </div>
            <span className="text-[hsl(var(--foreground))] text-sm">
              Each additional dog or cat
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center text-white font-bold">
              +10
            </div>
            <span className="text-[hsl(var(--foreground))] text-sm">
              Evening or weekend visits
            </span>
          </div>
        </div>
        <p className="text-center text-[hsl(var(--muted-foreground))] text-sm mt-6">
          All prices in USD • Custom packages available
        </p>
      </div>
    </section>
  );
}
