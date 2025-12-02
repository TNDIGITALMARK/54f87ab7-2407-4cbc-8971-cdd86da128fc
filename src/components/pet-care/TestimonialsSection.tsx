'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

function TestimonialCard({ name, location, text, image, rating }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-br from-white to-[hsl(var(--background))]/30 rounded-3xl p-8 border border-[hsl(var(--border))] hover:shadow-xl transition-all hover:scale-105">
      <div className="flex flex-col items-center text-center">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-[hsl(var(--foreground))] mb-8 text-base leading-relaxed italic">
          "{text}"
        </p>

        {/* Profile Section */}
        <div className="flex items-center gap-4 pt-6 border-t border-[hsl(var(--border))] w-full justify-center">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-3 border-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] shadow-md">
            <Image
              src={image}
              alt={name}
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-semibold text-[hsl(var(--foreground))] text-lg">{name}</div>
            <div className="text-sm text-[hsl(var(--muted-foreground))]">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Marina Del Rey, CA',
      text: 'Absolutely amazing service! My dog gets so excited when she sees Greta. The photo updates give me peace of mind throughout the day.',
      image: '/generated/testimonial-1.jpg',
      rating: 5,
    },
    {
      name: 'Lisa R.',
      location: 'Venice, CA',
      text: 'Best pet care service we\'ve ever used! Professional, reliable, and our pets are always so happy. Highly recommend to anyone in the area.',
      image: '/generated/testimonial-2.jpg',
      rating: 5,
    },
    {
      name: 'Maria K.',
      location: 'Santa Monica, CA',
      text: 'Greta is wonderful with our anxious rescue dog. She\'s patient, caring, and really takes the time to understand each pet\'s needs.',
      image: '/generated/testimonial-3.jpg',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[hsl(var(--background))]/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--foreground))] mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from the pet owners who trust us with their beloved companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] shadow-lg">
            <Star className="w-6 h-6 fill-white text-white" />
            <span className="font-semibold text-white text-lg">5.0 Average Rating</span>
            <span className="text-white/90">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
