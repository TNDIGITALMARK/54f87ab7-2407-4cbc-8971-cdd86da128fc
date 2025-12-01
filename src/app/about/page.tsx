import Navigation from '@/components/pet-care/Navigation';
import Footer from '@/components/pet-care/Footer';
import { MapPin, Heart, Shield, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const serviceAreas = [
    'Marina Del Rey',
    'Venice',
    'Westchester',
    'Playa Del Rey',
    'Santa Monica',
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Passionate Care',
      description: 'Every pet receives individualized attention and care tailored to their unique needs.',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Trusted & Reliable',
      description: 'Years of experience providing dependable pet care services to West LA families.',
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Premium Service',
      description: 'Professional pet care that treats your furry friends like family.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
            About Greta Langmead Pet Care
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Providing professional, loving pet care services to West Los Angeles communities since 2015
          </p>
        </div>

        {/* Service Areas Section */}
        <section className="mb-16">
          <div className="bg-white rounded-[var(--radius)] p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-[hsl(var(--primary))]" />
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))]">
                Service Areas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-[var(--radius-small)] p-6 text-center shadow hover:shadow-md transition-all"
                >
                  <p className="text-white font-semibold">{area}</p>
                </div>
              ))}
            </div>

            <div className="text-center text-[hsl(var(--muted-foreground))]">
              <p className="mb-2">
                Proudly serving pet owners across West Los Angeles with reliable, professional care
              </p>
              <p className="text-sm">
                Travel time varies by location. Contact us for availability in your area.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[hsl(var(--foreground))] mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[var(--radius)] p-8 shadow hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Greta Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[hsl(var(--background))] to-white rounded-[var(--radius)] p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
              Meet Greta
            </h2>
            <div className="space-y-4 text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                With over 8 years of professional pet care experience, Greta Langmead has become a trusted name in West Los Angeles pet services. Her passion for animals began at an early age and has grown into a dedicated career focused on providing the highest quality care for dogs and cats.
              </p>
              <p>
                Every pet has unique needs, and Greta takes the time to understand each one personally. Whether it's a high-energy pup needing an extended walk or a senior cat requiring gentle care, she ensures every visit is tailored to your pet's individual personality and requirements.
              </p>
              <p>
                Greta is fully insured, bonded, and certified in pet first aid and CPR. She maintains strong relationships with local veterinarians and stays current with best practices in pet care. Your furry family members are in experienced, caring hands.
              </p>
            </div>
          </div>
        </section>

        {/* Services Summary */}
        <section>
          <div className="bg-white rounded-[var(--radius)] p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-[hsl(var(--background))] rounded-[var(--radius-small)]">
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Private Dog Walking</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  30 or 60-minute walks customized to your dog's energy level and needs
                </p>
              </div>
              <div className="p-6 bg-[hsl(var(--background))] rounded-[var(--radius-small)]">
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Pet Sitting</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  In-home care while you're away, including feeding, play, and companionship
                </p>
              </div>
              <div className="p-6 bg-[hsl(var(--background))] rounded-[var(--radius-small)]">
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Cat Visits</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Daily visits for feeding, litter box maintenance, and quality time
                </p>
              </div>
            </div>
            <button className="px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-semibold hover:shadow-lg transition-all hover:scale-[1.02]">
              Schedule Your First Visit
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
