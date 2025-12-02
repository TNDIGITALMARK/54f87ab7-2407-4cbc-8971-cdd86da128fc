'use client';

import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-pink-purple rounded-[var(--radius)] p-12 text-white text-center shadow-lg animate-scaleIn">
          <h2 className="text-white mb-4">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your free consultation today and see why hundreds of pet owners in the area trust us with their furry family members.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-[var(--radius-button)] bg-white text-[hsl(var(--primary))] font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="px-8 py-4 rounded-[var(--radius-button)] bg-white/20 text-white border-2 border-white font-semibold text-lg hover:bg-white/30 transition-all hover:scale-105 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Send Message
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-white/80 text-sm mb-3">
              Free consultation • Same-day booking available • 100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
