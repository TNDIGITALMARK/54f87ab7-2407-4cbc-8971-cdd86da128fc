'use client';

import Navigation from '@/components/pet-care/Navigation';
import Footer from '@/components/pet-care/Footer';
import { Calendar, Clock, PawPrint, Image as ImageIcon, User } from 'lucide-react';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

interface Appointment {
  id: string;
  date: string;
  time: string;
  service: string;
  pet: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
}

interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  notes: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'appointments' | 'pets' | 'history'>('appointments');

  // Mock data
  const upcomingAppointments: Appointment[] = [
    {
      id: '1',
      date: '2024-12-05',
      time: '10:00 AM',
      service: '60-minute Dog Walk',
      pet: 'Max',
      status: 'upcoming',
      price: 40,
    },
    {
      id: '2',
      date: '2024-12-07',
      time: '2:00 PM',
      service: '30-minute Cat Visit',
      pet: 'Luna',
      status: 'upcoming',
      price: 25,
    },
  ];

  const myPets: Pet[] = [
    {
      id: '1',
      name: 'Max',
      type: 'dog',
      breed: 'Golden Retriever',
      notes: 'Loves long walks and playing fetch. Needs medication at 5pm.',
    },
    {
      id: '2',
      name: 'Luna',
      type: 'cat',
      breed: 'Domestic Shorthair',
      notes: 'Shy at first but warms up quickly. Prefers dry food.',
    },
  ];

  const appointmentHistory: Appointment[] = [
    {
      id: '3',
      date: '2024-11-28',
      time: '10:00 AM',
      service: '60-minute Dog Walk',
      pet: 'Max',
      status: 'completed',
      price: 40,
    },
    {
      id: '4',
      date: '2024-11-25',
      time: '3:00 PM',
      service: '30-minute Cat Visit',
      pet: 'Luna',
      status: 'completed',
      price: 25,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-2">
            My Dashboard
          </h1>
          <p className="text-[hsl(var(--muted-foreground))]">
            Manage your appointments, pets, and booking history
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[hsl(var(--border))]">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'appointments'
                ? 'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]'
                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
            }`}
          >
            Upcoming Appointments
          </button>
          <button
            onClick={() => setActiveTab('pets')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'pets'
                ? 'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]'
                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
            }`}
          >
            My Pets
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'history'
                ? 'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]'
                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
            }`}
          >
            History
          </button>
        </div>

        {/* Upcoming Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            {upcomingAppointments.length === 0 ? (
              <div className="bg-white rounded-[var(--radius)] p-12 text-center shadow">
                <Calendar className="w-16 h-16 text-[hsl(var(--muted-foreground))] mx-auto mb-4" />
                <p className="text-[hsl(var(--muted-foreground))] mb-4">
                  No upcoming appointments
                </p>
                <button className="px-6 py-2.5 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-medium hover:shadow-md transition-all">
                  Book a Visit
                </button>
              </div>
            ) : (
              <>
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-white rounded-[var(--radius)] p-6 shadow hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <PawPrint className="w-5 h-5 text-[hsl(var(--primary))]" />
                          <h3 className="font-semibold text-[hsl(var(--foreground))]">
                            {appointment.service}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(appointment.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {appointment.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {appointment.pet}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[hsl(var(--price))]">
                            ${appointment.price}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 rounded-[var(--radius-small)] bg-[hsl(var(--primary))] text-white text-sm font-medium hover:shadow-md transition-all">
                            Details
                          </button>
                          <button className="px-4 py-2 rounded-[var(--radius-small)] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] text-sm font-medium hover:bg-[hsl(var(--muted))] transition-all">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full md:w-auto px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-semibold hover:shadow-lg transition-all hover:scale-[1.02]">
                  Book Another Visit
                </button>
              </>
            )}
          </div>
        )}

        {/* My Pets Tab */}
        {activeTab === 'pets' && (
          <div className="space-y-4">
            {myPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white rounded-[var(--radius)] p-6 shadow hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0">
                    <PawPrint className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-1">
                      {pet.name}
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))] mb-3">
                      {pet.breed} • {pet.type === 'dog' ? 'Dog' : 'Cat'}
                    </p>
                    <div className="bg-[hsl(var(--background))] rounded-[var(--radius-small)] p-4">
                      <p className="text-sm text-[hsl(var(--foreground))] font-medium mb-1">
                        Special Notes:
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {pet.notes}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-[var(--radius-small)] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] text-sm font-medium hover:bg-[hsl(var(--muted))] transition-all">
                    Edit
                  </button>
                </div>
              </div>
            ))}
            <button className="w-full md:w-auto px-8 py-3 rounded-[var(--radius-button)] bg-[hsl(var(--cta))] text-white font-semibold hover:shadow-lg transition-all hover:scale-[1.02]">
              Add New Pet
            </button>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            {appointmentHistory.length === 0 ? (
              <div className="bg-white rounded-[var(--radius)] p-12 text-center shadow">
                <ImageIcon className="w-16 h-16 text-[hsl(var(--muted-foreground))] mx-auto mb-4" />
                <p className="text-[hsl(var(--muted-foreground))]">
                  No appointment history yet
                </p>
              </div>
            ) : (
              <>
                {appointmentHistory.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-white rounded-[var(--radius)] p-6 shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <PawPrint className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                          <h3 className="font-semibold text-[hsl(var(--foreground))]">
                            {appointment.service}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(appointment.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {appointment.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {appointment.pet}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-[hsl(var(--price))]">
                          ${appointment.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
