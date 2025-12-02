'use client';

import { Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[hsl(var(--background))]/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--primary))]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--secondary))]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-8">
              Get In Touch
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mb-10">
              Ready to give your pet the care they deserve? We'd love to hear from you!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[hsl(var(--border))]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2 text-lg">Email</h4>
                  <p className="text-[hsl(var(--muted-foreground))] text-base">
                    greta@pawandpamper.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[hsl(var(--border))]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2 text-lg">Phone</h4>
                  <p className="text-[hsl(var(--muted-foreground))] text-base">
                    (310) 555-PAWS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[hsl(var(--border))]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2 text-lg">Service Areas</h4>
                  <p className="text-[hsl(var(--muted-foreground))] text-base">
                    Marina Del Rey • Venice • Westchester<br />
                    Playa Del Rey • Santa Monica
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-[hsl(var(--border))] shadow-xl">
            <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-8">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-[var(--radius-small)] border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-[var(--radius-small)] border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all"
                placeholder="(310) 555-0123"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-[var(--radius-small)] border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all resize-none"
                placeholder="Tell us about your pet care needs..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
