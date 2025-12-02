'use client';

import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--primary))] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-white mb-6 text-5xl">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-white/95 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your free consultation today and see why hundreds of pet owners in the area trust us with their furry family members.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="px-10 py-5 rounded-full bg-white text-[hsl(var(--primary))] font-semibold text-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center gap-3 shadow-xl">
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </button>
            <button className="px-10 py-5 rounded-full bg-white/20 backdrop-blur-sm text-white border-3 border-white font-semibold text-xl hover:bg-white/30 transition-all hover:scale-110 flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>Send Message</span>
            </button>
          </div>

          <div className="pt-10 border-t border-white/30">
            <p className="text-white/90 text-lg">
              Free consultation • Same-day booking available • 100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
