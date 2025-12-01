'use client';

import Image from 'next/image';

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  image: string;
}

function TestimonialCard({ name, location, text, image }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="testimonial-img mb-4 relative">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>

      {/* Quote */}
      <p className="text-[hsl(var(--foreground))] italic mb-3 text-sm max-w-xs">
        "{text}"
      </p>

      {/* Name & Location */}
      <div className="text-xs text-[hsl(var(--muted-foreground))]">
        <div className="font-semibold text-[hsl(var(--foreground))]">{name}</div>
        <div>{location}</div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Marina Del Rey, CA',
      text: 'Paw & Pamper - She really is!',
      image: '/generated/testimonial-1.jpg',
    },
    {
      name: 'Lisa R.',
      location: 'Venice, CA',
      text: 'Best in all our lives!',
      image: '/generated/testimonial-2.jpg',
    },
    {
      name: 'Maria K.',
      location: 'Santa Monica, CA',
      text: "Pam is Pamper - Our dog's happy!",
      image: '/generated/testimonial-3.jpg',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-center text-[hsl(var(--foreground))] font-semibold text-2xl mb-10">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
