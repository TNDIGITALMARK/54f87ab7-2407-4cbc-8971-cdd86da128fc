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
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--primary))] text-white font-semibold text-lg mb-8">
          Dog Walking & Pet Sitting Services
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Additional Pricing Info */}
      <div className="mt-8 p-6 bg-white/80 rounded-[var(--radius)] shadow-sm">
        <h4 className="font-semibold text-[hsl(var(--foreground))] mb-3 text-center">
          Additional Services
        </h4>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-[hsl(var(--muted-foreground))]">
          <div className="text-center">
            <span className="font-medium text-[hsl(var(--foreground))]">+$5</span> for each additional dog or cat
          </div>
          <div className="text-center">
            <span className="font-medium text-[hsl(var(--foreground))]">+$10</span> for evening or weekend visits
          </div>
        </div>
      </div>
    </section>
  );
}
