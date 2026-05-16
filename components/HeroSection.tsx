'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OrbitDecoration } from './OrbitDecoration';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-cream-canvas overflow-hidden pt-32 pb-20 md:pb-0 md:pt-48 flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Headline */}
            <h1 className="font-sofia font-500 text-5xl md:text-6xl lg:text-7xl leading-tight text-ink-black mb-6">
              Kamu Fokus Kuliah.
              <br />
              <span className="text-signal-orange">Biarkan Kami</span>
              <br />
              Menyelesaikan Tugasmu.
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-slate-gray mb-10 max-w-lg leading-relaxed">
              Layanan jasa tugas premium untuk mahasiswa modern — cepat, rapi, revisi mudah, dan dikerjakan dengan profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/083835164798"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-ink-black text-cream-lifted rounded-stadium font-sofia font-500 text-center hover:shadow-lg transition-shadow"
              >
                Mulai Konsultasi
              </motion.a>
              <motion.a
                href="#layanan"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-ink-black border-2 border-ink-black rounded-stadium font-sofia font-500 text-center hover:shadow-lg transition-shadow"
              >
                Lihat Layanan
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-cream-canvas/50 flex gap-8"
            >
              <div>
                <div className="font-sofia font-500 text-signal-orange text-2xl">✓ Fast Response</div>
                <p className="text-sm text-slate-gray mt-1">Balas dalam hitungan jam</p>
              </div>
              <div>
                <div className="font-sofia font-500 text-signal-orange text-2xl">✓ 100+ Client</div>
                <p className="text-sm text-slate-gray mt-1">Terpercaya mahasiswa</p>
              </div>
              <div>
                <div className="font-sofia font-500 text-signal-orange text-2xl">✓ Revisi Mudah</div>
                <p className="text-sm text-slate-gray mt-1">Unlimited revisi minor</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            {/* Orbit Background */}
            <div className="absolute inset-0">
              <OrbitDecoration size="large" opacity={0.3} />
            </div>

            {/* Main Circle */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 w-80 h-80 bg-gradient-to-br from-signal-orange to-light-signal-orange rounded-full shadow-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-7xl mb-4">📚</div>
                <p className="text-cream-lifted font-sofia font-500 text-xl">
                  Duduk Santai
                </p>
                <p className="text-cream-lifted/80 text-sm mt-2">
                  Tugas Kelar
                </p>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                <div className="bg-white rounded-full px-4 py-2 shadow-soft">
                  <p className="text-xs font-500 text-ink-black">⚡ Fast Response</p>
                </div>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 translate-x-4 translate-y-4">
                <div className="bg-white rounded-full px-4 py-2 shadow-soft">
                  <p className="text-xs font-500 text-ink-black">✓ 100+ Klien</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-1/2 right-0 translate-x-8 -translate-y-1/2">
                <div className="bg-white rounded-full px-4 py-2 shadow-soft">
                  <p className="text-xs font-500 text-ink-black">💬 Revisi Mudah</p>
                </div>
              </motion.div>
            </motion.animate>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
