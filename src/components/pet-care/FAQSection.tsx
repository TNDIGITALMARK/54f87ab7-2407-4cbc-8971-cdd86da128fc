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
    <div className="bg-white rounded-[var(--radius)] shadow-sm overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[hsl(var(--muted))] transition-colors"
      >
        <span className="font-semibold text-[hsl(var(--foreground))]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[hsl(var(--primary))] transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-[hsl(var(--muted-foreground))] leading-relaxed animate-fadeIn">
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
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[hsl(var(--foreground))] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Have questions? We've got answers. Can't find what you're looking for?
            Feel free to contact us!
          </p>
        </div>

        <div className="space-y-4">
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

        <div className="mt-12 text-center">
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Still have questions?
          </p>
          <button className="px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--primary))] text-on-dark font-semibold hover:shadow-lg transition-all hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
