'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[hsl(var(--border))] overflow-hidden hover:shadow-md transition-all">
      <button
        onClick={onClick}
        className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-white/90 transition-colors"
      >
        <span className="font-semibold text-[hsl(var(--foreground))] text-lg">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-[hsl(var(--muted-foreground))] leading-relaxed text-base animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer:
        'We proudly serve Marina Del Rey, Venice, Westchester, Playa Del Rey, and Santa Monica. If you\'re nearby but not in these exact areas, please contact us to see if we can accommodate you.',
    },
    {
      question: 'How do I book a service?',
      answer:
        'You can book through our online calendar above, call us directly, or send us a message through the contact form. We recommend booking at least 24 hours in advance, but we can often accommodate last-minute requests.',
    },
    {
      question: 'Are you insured and bonded?',
      answer:
        'Yes! We are fully insured and bonded for your peace of mind. We take the safety and security of your pets and home very seriously.',
    },
    {
      question: 'What if my pet has special needs or medications?',
      answer:
        'We are experienced with pets who have special needs, dietary restrictions, or medication requirements. During your consultation, we\'ll discuss all special care instructions in detail.',
    },
    {
      question: 'Can I meet you before booking a service?',
      answer:
        'Absolutely! We offer free consultations so you can meet us and we can meet your pet. This helps ensure we\'re the right fit for your family.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We understand that plans change. Please provide at least 24 hours notice for cancellations to avoid a cancellation fee. Emergency situations are handled on a case-by-case basis.',
    },
    {
      question: 'Will I get updates during the visit?',
      answer:
        'Yes! We send photos and updates during every visit. You\'ll know exactly how your pet is doing and what activities they enjoyed.',
    },
    {
      question: 'Do you offer services for cats too?',
      answer:
        'Yes! While we specialize in dog walking, we also provide pet sitting services for cats, including feeding, litter box cleaning, playtime, and companionship.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--secondary))]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--foreground))] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            Have questions? We've got answers. Can't find what you're looking for?
            Feel free to contact us!
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[hsl(var(--muted-foreground))] text-lg mb-6">
            Still have questions?
          </p>
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold text-lg hover:shadow-xl transition-all hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
