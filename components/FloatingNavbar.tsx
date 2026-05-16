'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BRAND, SOCIAL_LINKS } from '@/lib/constants';

export const FloatingNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-stadium px-8 py-4 shadow-soft"
      >
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="font-sofia font-500 text-lg text-ink-black">
            {BRAND.shortName}
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-gray hover:text-ink-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ink-black text-cream-lifted px-6 py-2 rounded-stadium text-sm font-500 whitespace-nowrap"
          >
            Hubungi Kami
          </motion.a>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-stadium shadow-soft"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 right-6 z-40 bg-white/95 backdrop-blur-md rounded-stadium p-6 shadow-soft min-w-48"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-slate-gray hover:text-ink-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <motion.a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ink-black text-cream-lifted px-4 py-2 rounded-stadium text-sm font-500 text-center mt-2"
              >
                Hubungi Kami
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
