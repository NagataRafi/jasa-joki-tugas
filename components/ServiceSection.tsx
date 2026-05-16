'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const ServiceSection: React.FC = () => {
  return (
    <section id="layanan" className="py-20 md:py-32 bg-cream-lifted">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-signal-orange rounded-full" />
            <span className="text-sm font-500 text-slate-gray">• LAYANAN</span>
          </div>
          <h2 className="font-sofia font-500 text-4xl md:text-5xl text-ink-black max-w-2xl">
            Semua Bantuan Akademik Dalam Satu Tempat.
          </h2>
        </motion.div>

        {/* Services Grid - Staggered Layout */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Service Icon/Circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-signal-orange/20 to-light-signal-orange/10 rounded-full flex items-center justify-center text-6xl shadow-soft"
              >
                {service.icon}
              </motion.div>

              {/* Service Content */}
              <div className="flex-1">
                <h3 className="font-sofia font-500 text-3xl md:text-4xl text-ink-black mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-gray text-base md:text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-signal-orange font-bold mt-1">✓</span>
                      <span className="text-sm text-slate-gray">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/083835164798"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ gap: '12px' }}
                  className="inline-flex items-center gap-2 text-signal-orange font-sofia font-500 hover:text-light-signal-orange transition-colors"
                >
                  Pesan Sekarang
                  <motion.div whileHover={{ x: 4 }}>
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
