'use client';

import { Shield, Clock, MapPin, Camera, Heart, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all group">
      <div className="w-14 h-14 rounded-xl gradient-pink-purple flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2 text-lg">
          {title}
        </h3>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-on-dark" />,
      title: 'Insured & Bonded',
      description: 'Fully insured and bonded for your peace of mind. Your pets are protected with comprehensive coverage.',
    },
    {
      icon: <Camera className="w-6 h-6 text-on-dark" />,
      title: 'Photo Updates',
      description: 'Receive photos and updates during every visit so you always know your pet is happy and safe.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-on-dark" />,
      title: 'GPS Tracking',
      description: 'Track your dog\'s walk in real-time with GPS tracking. See exactly where your furry friend has been.',
    },
    {
      icon: <Clock className="w-6 h-6 text-on-dark" />,
      title: 'Flexible Scheduling',
      description: 'Book visits that work with your schedule. Last-minute changes? We understand life happens.',
    },
    {
      icon: <Heart className="w-6 h-6 text-on-dark" />,
      title: 'Loving Care',
      description: 'Treat every pet like our own. Your furry family members get attention, love, and proper care.',
    },
    {
      icon: <Award className="w-6 h-6 text-on-dark" />,
      title: 'Certified Professionals',
      description: 'Pet first aid certified and experienced with all breeds, sizes, and temperaments.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[hsl(var(--secondary))]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--foreground))] mb-4">
            What Makes Us Special
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
            We go above and beyond to ensure your pets receive the best care possible.
            Your peace of mind is our priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
