'use client';

import { Users, Heart, Star, Calendar } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay?: number;
}

function StatCard({ icon, number, label, delay = 0 }: StatCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-6 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-5xl font-bold text-white mb-2">{number}</div>
      <p className="text-white/90 text-sm font-medium">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-on-dark" />,
      number: '500+',
      label: 'Happy Clients',
      delay: 0,
    },
    {
      icon: <Heart className="w-8 h-8 text-on-dark" />,
      number: '800+',
      label: 'Pets Cared For',
      delay: 100,
    },
    {
      icon: <Star className="w-8 h-8 text-on-dark" />,
      number: '5.0',
      label: 'Average Rating',
      delay: 200,
    },
    {
      icon: <Calendar className="w-8 h-8 text-on-dark" />,
      number: '10+',
      label: 'Years Experience',
      delay: 300,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16 text-white">
          Why Pet Owners Trust Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
