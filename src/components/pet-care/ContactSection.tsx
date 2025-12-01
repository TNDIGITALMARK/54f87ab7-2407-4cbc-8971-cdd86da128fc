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
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
            Contact Us
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">Email</h4>
                <p className="text-[hsl(var(--muted-foreground))]">
                  greta@pawandpamper.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">Phone</h4>
                <p className="text-[hsl(var(--muted-foreground))]">
                  (310) 555-PAWS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">Service Areas</h4>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Marina Del Rey • Venice • Westchester<br />
                  Playa Del Rey • Santa Monica
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[var(--radius)] p-8 shadow">
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
              className="w-full px-6 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
