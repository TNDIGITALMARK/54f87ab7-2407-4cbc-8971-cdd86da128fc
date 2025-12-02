'use client';

import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const timeSlots = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
  ];

  const services = [
    { id: '30min', name: '30-Minute Walk', price: 25 },
    { id: '60min', name: '60-Minute Walk', price: 40 },
    { id: 'sitting', name: 'Pet Sitting (Hourly)', price: 25 },
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedService) {
      alert(`Booking confirmed!\nDate: ${selectedDate}\nTime: ${selectedTime}\nService: ${selectedService}`);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[hsl(var(--background))] via-white to-[hsl(var(--background))]/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center shadow-lg">
            <Calendar className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            Book Your Visit
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-[hsl(var(--border))] shadow-xl">{/* Content wrapper */}

        {/* Service Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
            Select Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.name)}
                className={`p-4 rounded-[var(--radius-small)] border-2 transition-all ${
                  selectedService === service.name
                    ? 'border-[hsl(var(--primary))] bg-[hsl(var(--background))]'
                    : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
                }`}
              >
                <div className="font-semibold text-[hsl(var(--foreground))] mb-1">
                  {service.name}
                </div>
                <div className="text-2xl font-bold text-[hsl(var(--price))]">
                  ${service.price}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
            Select Date
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-4">
            {dates.map((date, index) => {
              const dateStr = date.toISOString().split('T')[0];
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`flex-shrink-0 w-20 p-3 rounded-[var(--radius-small)] border-2 transition-all ${
                    selectedDate === dateStr
                      ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-on-dark'
                      : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
                  }`}
                >
                  <div className={`text-xs mb-1 ${selectedDate === dateStr ? 'text-on-dark' : ''}`}>
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className={`text-lg font-bold ${selectedDate === dateStr ? 'text-on-dark' : ''}`}>
                    {date.getDate()}
                  </div>
                  {isWeekend && (
                    <div className={`text-[10px] mt-1 ${selectedDate === dateStr ? 'text-on-dark' : ''}`}>+$10</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
            Select Time
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {timeSlots.map((time) => {
              const hour = parseInt(time.split(':')[0]);
              const isPM = time.includes('PM');
              const isEvening = (isPM && hour >= 5) || (!isPM && hour === 12);
              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-[var(--radius-small)] border-2 transition-all text-sm font-medium ${
                    selectedTime === time
                      ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-on-dark'
                      : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
                  }`}
                >
                  <span className={selectedTime === time ? 'text-on-dark' : ''}>{time}</span>
                  {isEvening && (
                    <div className={`text-[10px] mt-1 ${selectedTime === time ? 'text-on-dark' : ''}`}>+$10</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Booking Summary & Confirm */}
        {selectedService && selectedDate && selectedTime && (
          <div className="bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--secondary))]/5 rounded-2xl p-8 border-2 border-[hsl(var(--primary))]/20">
            <h3 className="font-semibold text-[hsl(var(--foreground))] mb-6 text-xl">
              Booking Summary
            </h3>
            <div className="space-y-3 text-base text-[hsl(var(--muted-foreground))] mb-8">
              <div className="flex justify-between items-center">
                <span>Service:</span>
                <span className="font-semibold text-[hsl(var(--foreground))] text-lg">{selectedService}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Date:</span>
                <span className="font-semibold text-[hsl(var(--foreground))] text-lg">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Time:</span>
                <span className="font-semibold text-[hsl(var(--foreground))] text-lg">{selectedTime}</span>
              </div>
            </div>
            <button
              onClick={handleBooking}
              className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
