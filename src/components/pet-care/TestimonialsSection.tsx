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
    <div className="bg-white rounded-[var(--radius)] p-8 shadow card-hover">
      <div className="flex flex-col items-center text-center">
        {/* Quote Icon */}
        <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4">
          <Quote className="w-6 h-6 text-[hsl(var(--primary))]" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-[hsl(var(--foreground))] mb-6 text-base leading-relaxed">
          "{text}"
        </p>

        {/* Profile Section */}
        <div className="flex items-center gap-3 pt-4 border-t border-[hsl(var(--border))] w-full">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[hsl(var(--primary))]">
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-semibold text-[hsl(var(--foreground))]">{name}</div>
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
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-[hsl(var(--foreground))] mb-4">
          What Pet Parents Say
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Don't just take our word for it - hear from the pet owners who trust us with their beloved companions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Trust Badge */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm">
          <Star className="w-5 h-5 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
          <span className="font-semibold text-[hsl(var(--foreground))]">5.0 Average Rating</span>
          <span className="text-[hsl(var(--muted-foreground))]">from 200+ reviews</span>
        </div>
      </div>
    </section>
  );
}
