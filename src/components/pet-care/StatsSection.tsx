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
      <div className="w-16 h-16 rounded-full gradient-pink-purple flex items-center justify-center mb-4 shadow-md">
        {icon}
      </div>
      <div className="stat-number mb-2">{number}</div>
      <p className="text-[hsl(var(--muted-foreground))] text-sm font-medium">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      number: '500+',
      label: 'Happy Clients',
      delay: 0,
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      number: '800+',
      label: 'Pets Cared For',
      delay: 100,
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      number: '5.0',
      label: 'Average Rating',
      delay: 200,
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      number: '10+',
      label: 'Years Experience',
      delay: 300,
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="bg-white rounded-[var(--radius)] shadow-lg p-8 md:p-12">
        <h2 className="text-center mb-12 text-[hsl(var(--foreground))]">
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
