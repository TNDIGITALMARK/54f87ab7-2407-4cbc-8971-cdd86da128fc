'use client';

import Navigation from '@/components/pet-care/Navigation';
import Footer from '@/components/pet-care/Footer';
import Image from 'next/image';
import { Star, Quote, Heart } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
  petName?: string;
  petType?: string;
}

function TestimonialCard({ name, location, text, image, rating, petName, petType }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-br from-white to-[hsl(var(--background))]/30 rounded-3xl p-8 border border-[hsl(var(--border))] hover:shadow-xl transition-all hover:scale-[1.02] card-hover">
      <div className="flex flex-col">
        {/* Header with Image and Name */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 shadow-md flex-shrink-0" style={{ borderColor: 'hsl(var(--primary))' }}>
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-[hsl(var(--foreground))] text-xl mb-1">{name}</div>
            <div className="text-sm text-[hsl(var(--muted-foreground))] mb-2">{location}</div>
            {petName && (
              <div className="text-sm text-[hsl(var(--primary))] font-medium">
                {petType}: {petName}
              </div>
            )}
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
          ))}
        </div>

        {/* Quote Icon */}
        <Quote className="w-8 h-8 text-[hsl(var(--primary))]/20 mb-3" />

        {/* Quote Text */}
        <p className="text-[hsl(var(--foreground))] text-base leading-relaxed italic">
          "{text}"
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const testimonials: TestimonialProps[] = [
    {
      name: 'Sarah M.',
      location: 'Marina Del Rey, CA',
      text: 'Absolutely amazing service! My dog gets so excited when she sees Greta. The photo updates give me peace of mind throughout the day.',
      image: '/generated/testimonial-1.jpg',
      rating: 5,
      petName: 'Luna',
      petType: 'Golden Retriever',
    },
    {
      name: 'Lisa R.',
      location: 'Venice, CA',
      text: 'Best pet care service we\'ve ever used! Professional, reliable, and our pets are always so happy. Highly recommend to anyone in the area.',
      image: '/generated/testimonial-2.jpg',
      rating: 5,
      petName: 'Max & Bella',
      petType: 'Dogs',
    },
    {
      name: 'Maria K.',
      location: 'Santa Monica, CA',
      text: 'Greta is wonderful with our anxious rescue dog. She\'s patient, caring, and really takes the time to understand each pet\'s needs.',
      image: '/generated/testimonial-3.jpg',
      rating: 5,
      petName: 'Charlie',
      petType: 'Rescue Mix',
    },
    {
      name: 'Jennifer T.',
      location: 'Playa Del Rey, CA',
      text: 'Our cat used to hide whenever we had a pet sitter, but with Greta she actually comes out to greet her! The daily updates with photos are such a nice touch.',
      image: '/generated/testimonial-1.jpg',
      rating: 5,
      petName: 'Whiskers',
      petType: 'Tabby Cat',
    },
    {
      name: 'David & Emily S.',
      location: 'Westchester, CA',
      text: 'We travel frequently for work and it\'s so reassuring to know our pets are in Greta\'s capable hands. She treats them like her own and our house is always in great condition when we return.',
      image: '/generated/testimonial-2.jpg',
      rating: 5,
      petName: 'Rocky & Mittens',
      petType: 'Dog & Cat',
    },
    {
      name: 'Amanda L.',
      location: 'Marina Del Rey, CA',
      text: 'Greta has been walking our senior dog for over a year now. She\'s so gentle with him and adjusts the pace to his needs. We couldn\'t ask for better care!',
      image: '/generated/testimonial-3.jpg',
      rating: 5,
      petName: 'Buddy',
      petType: 'Senior Labrador',
    },
    {
      name: 'Michael R.',
      location: 'Venice, CA',
      text: 'As a first-time pet owner, I was nervous about finding someone trustworthy. Greta exceeded all expectations - professional, punctual, and my puppy absolutely loves her!',
      image: '/generated/testimonial-1.jpg',
      rating: 5,
      petName: 'Scout',
      petType: 'Beagle Puppy',
    },
    {
      name: 'Rachel & Tom B.',
      location: 'Santa Monica, CA',
      text: 'We\'ve been using Greta\'s services for 3 years now and she\'s like family. Our dogs get so excited when they see her car pull up. The consistency and reliability are unmatched.',
      image: '/generated/testimonial-2.jpg',
      rating: 5,
      petName: 'Duke & Daisy',
      petType: 'German Shepherds',
    },
    {
      name: 'Nicole P.',
      location: 'Playa Del Rey, CA',
      text: 'Greta took care of our cats during a 2-week vacation and sent daily photo updates. It made being away so much easier knowing they were in such caring hands.',
      image: '/generated/testimonial-3.jpg',
      rating: 5,
      petName: 'Simba & Nala',
      petType: 'Indoor Cats',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10 mb-6">
            <Star className="w-6 h-6 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
            <span className="font-semibold text-[hsl(var(--primary))]">5.0 Star Rating</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
            What Pet Parents Say
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Don't just take our word for it - hear from the pet owners who trust us with their beloved companions every day.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-[var(--radius)] p-6 shadow text-center">
            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">200+</div>
            <div className="text-[hsl(var(--muted-foreground))]">Happy Clients</div>
          </div>
          <div className="bg-white rounded-[var(--radius)] p-6 shadow text-center">
            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">5.0</div>
            <div className="text-[hsl(var(--muted-foreground))]">Average Rating</div>
          </div>
          <div className="bg-white rounded-[var(--radius)] p-6 shadow text-center">
            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">8+</div>
            <div className="text-[hsl(var(--muted-foreground))]">Years Experience</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-3xl p-12 text-center shadow-lg">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Pet Family?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the same exceptional care that our clients rave about. Schedule your first visit today!
          </p>
          <button className="px-8 py-4 rounded-[var(--radius-button)] bg-white text-[hsl(var(--primary))] font-semibold hover:shadow-xl transition-all hover:scale-[1.02]">
            Book Your First Visit
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
