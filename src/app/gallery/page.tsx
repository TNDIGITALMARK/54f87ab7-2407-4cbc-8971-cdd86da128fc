'use client';

import Navigation from '@/components/pet-care/Navigation';
import Footer from '@/components/pet-care/Footer';
import Image from 'next/image';
import { Camera, Heart, PawPrint, Instagram } from 'lucide-react';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category: 'walks' | 'sitting' | 'cats' | 'adventures';
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Camera className="w-4 h-4" /> },
    { id: 'walks', label: 'Dog Walks', icon: <PawPrint className="w-4 h-4" /> },
    { id: 'sitting', label: 'Pet Sitting', icon: <Heart className="w-4 h-4" /> },
    { id: 'cats', label: 'Cat Visits', icon: <Heart className="w-4 h-4" /> },
    { id: 'adventures', label: 'Adventures', icon: <Camera className="w-4 h-4" /> },
  ];

  // Gallery images - using existing images and placeholders
  const galleryImages: GalleryImage[] = [
    {
      src: '/generated/hero-dogs-park.jpg',
      alt: 'Happy dogs playing at the park',
      caption: 'Luna & Max enjoying their morning walk at Marina Del Rey',
      category: 'walks',
    },
    {
      src: '/generated/testimonial-1.jpg',
      alt: 'Golden retriever smiling',
      caption: 'This smile makes it all worth it! ❤️',
      category: 'adventures',
    },
    {
      src: '/generated/testimonial-2.jpg',
      alt: 'Dog on a walk',
      caption: 'Beautiful day for a beach walk',
      category: 'walks',
    },
    {
      src: '/generated/testimonial-3.jpg',
      alt: 'Happy dog portrait',
      caption: 'Charlie after his favorite hike',
      category: 'adventures',
    },
    {
      src: '/generated/hero-dogs-park.jpg',
      alt: 'Dogs socializing',
      caption: 'Making new friends at the dog park',
      category: 'walks',
    },
    {
      src: '/generated/testimonial-1.jpg',
      alt: 'Relaxing cat',
      caption: 'Whiskers enjoying his afternoon nap',
      category: 'cats',
    },
    {
      src: '/generated/testimonial-2.jpg',
      alt: 'Playful puppy',
      caption: 'Scout being his adorable self',
      category: 'sitting',
    },
    {
      src: '/generated/testimonial-3.jpg',
      alt: 'Senior dog',
      caption: 'Gentle walk with sweet Buddy',
      category: 'walks',
    },
    {
      src: '/generated/hero-dogs-park.jpg',
      alt: 'Cat lounging',
      caption: 'Simba enjoying his daily visit',
      category: 'cats',
    },
    {
      src: '/generated/testimonial-1.jpg',
      alt: 'Dog on adventure',
      caption: 'Exploring new trails together',
      category: 'adventures',
    },
    {
      src: '/generated/testimonial-2.jpg',
      alt: 'Cozy pet sitting',
      caption: 'Relaxing at home with Duke',
      category: 'sitting',
    },
    {
      src: '/generated/testimonial-3.jpg',
      alt: 'Happy pet',
      caption: 'Nothing but smiles on our walks!',
      category: 'walks',
    },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10 mb-6">
            <Camera className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="font-semibold text-[hsl(var(--primary))]">Pet Photo Gallery</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
            Moments with Our Furry Friends
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            A glimpse into the adventures, walks, and special moments we share with the pets we care for.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white shadow-md'
                  : 'bg-white text-[hsl(var(--foreground))] hover:shadow-md border border-[hsl(var(--border))]'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Instagram Style Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[var(--radius)] overflow-hidden shadow hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  {image.caption && (
                    <p className="text-white p-6 text-sm font-medium">
                      {image.caption}
                    </p>
                  )}
                </div>
              </div>

              {/* Like Button (Decorative) */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5 text-[hsl(var(--primary))]" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow Section */}
        <div className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-3xl p-12 text-center shadow-lg mb-16">
          <Instagram className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Follow Our Pet Adventures
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get daily updates, photos, and stories from our walks and pet care visits. Follow us on Instagram to see more adorable moments!
          </p>
          <button className="px-8 py-4 rounded-[var(--radius-button)] bg-white text-[hsl(var(--primary))] font-semibold hover:shadow-xl transition-all hover:scale-[1.02]">
            Follow on Instagram
          </button>
        </div>

        {/* Photo Update Promise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[var(--radius)] p-8 shadow text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
              Daily Photo Updates
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Receive photos and updates from every visit so you know your pet is happy and safe
            </p>
          </div>

          <div className="bg-white rounded-[var(--radius)] p-8 shadow text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
              Capturing Special Moments
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              We love documenting the fun times and precious moments with your furry friends
            </p>
          </div>

          <div className="bg-white rounded-[var(--radius)] p-8 shadow text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
              <PawPrint className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
              Peace of Mind
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Stay connected to your pets throughout the day with real-time updates and photos
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
