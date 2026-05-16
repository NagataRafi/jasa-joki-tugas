'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-cream-lifted overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-signal-orange rounded-full" />
            <span className="text-sm font-500 text-slate-gray">• FAQ</span>
          </div>
          <h2 className="font-sofia font-500 text-4xl md:text-5xl text-ink-black">
            Pertanyaan Umum
          </h2>
          <p className="text-slate-gray mt-4 max-w-xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-stadium p-6 md:p-8 text-left hover:shadow-lg transition-all duration-300 border border-cream-canvas"
                whileHover={{ borderColor: '#F37338' }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sofia font-500 text-lg md:text-xl text-ink-black pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} className="text-signal-orange" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Answer - Accordion Content */}
              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-cream-lifted rounded-stadium p-6 md:p-8 mt-2 border border-cream-canvas">
                      <p className="text-base text-slate-gray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-20 text-center"
        >
          <p className="text-slate-gray mb-4">Masih ada pertanyaan?</p>
          <motion.a
            href="https://wa.me/083835164798"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-signal-orange text-white px-8 py-3 rounded-stadium font-500 hover:shadow-lg transition-shadow"
          >
            💬 Chat dengan Kami
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
