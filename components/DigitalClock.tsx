'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeZoneClock {
  id: string;
  name: string;
  timezone: string;
  time: string;
  date: string;
  offset: number;
}

export const DigitalClock: React.FC = () => {
  const [clocks, setClocks] = useState<TimeZoneClock[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const timeZones = [
    { id: 'wib', name: 'Jakarta', timezone: 'Asia/Jakarta', offset: 7 },
    { id: 'wita', name: 'Makassar', timezone: 'Asia/Makassar', offset: 8 },
    { id: 'wit', name: 'Jayapura', timezone: 'Asia/Jayapura', offset: 9 },
    { id: 'sgp', name: 'Singapore', timezone: 'Asia/Singapore', offset: 8 },
    { id: 'bkk', name: 'Bangkok', timezone: 'Asia/Bangkok', offset: 7 },
    { id: 'hkg', name: 'Hong Kong', timezone: 'Asia/Hong_Kong', offset: 8 },
    { id: 'tyo', name: 'Tokyo', timezone: 'Asia/Tokyo', offset: 9 },
    { id: 'syd', name: 'Sydney', timezone: 'Australia/Sydney', offset: 10 },
    { id: 'nyc', name: 'New York', timezone: 'America/New_York', offset: -5 },
    { id: 'lax', name: 'Los Angeles', timezone: 'America/Los_Angeles', offset: -8 },
    { id: 'lhr', name: 'London', timezone: 'Europe/London', offset: 0 },
    { id: 'cdg', name: 'Paris', timezone: 'Europe/Paris', offset: 1 },
  ];

  useEffect(() => {
    const updateClocks = () => {
      const updatedClocks = timeZones.map((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          weekday: 'short',
          month: 'short',
          day: '2-digit',
        });

        const time = formatter.format(new Date());
        const date = dateFormatter.format(new Date());

        return {
          ...tz,
          time,
          date,
        };
      });

      setClocks(updatedClocks);
    };

    updateClocks();
    setIsLoaded(true);

    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const clockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-cream-canvas via-cream-lifted to-cream-canvas py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-sofia font-500 text-5xl md:text-6xl text-ink-black mb-4">
            🌍 Global Time Zones
          </h1>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Check the current time across major cities around the world
          </p>
        </motion.div>

        {/* Clocks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {clocks.map((clock) => (
            <motion.div
              key={clock.id}
              variants={clockVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-signal-orange/10 to-light-signal-orange/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Clock card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-cream-canvas/50">
                {/* City Name */}
                <div className="mb-4">
                  <h3 className="font-sofia font-500 text-2xl text-ink-black">
                    {clock.name}
                  </h3>
                  <p className="text-xs text-slate-gray mt-1">{clock.timezone}</p>
                </div>

                {/* Digital Time Display */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-br from-ink-black to-slate-gray rounded-xl p-6 mb-4"
                >
                  <div className="font-mono text-4xl md:text-5xl font-bold text-cream-lifted tracking-wider text-center">
                    {clock.time}
                  </div>
                </motion.div>

                {/* Date and Offset */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-gray">{clock.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-500 ${
                    clock.offset >= 0
                      ? 'bg-signal-orange/10 text-signal-orange'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    UTC{clock.offset >= 0 ? '+' : ''}{clock.offset}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-soft border border-cream-canvas/50"
        >
          <h2 className="font-sofia font-500 text-2xl text-ink-black mb-6">
            ℹ️ Time Zone Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-sofia font-500 text-lg text-signal-orange mb-3">
                UTC Offsets
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                UTC (Coordinated Universal Time) is the primary time standard used worldwide. All time zones are expressed as UTC±N hours offset from the UTC reference point.
              </p>
            </div>
            <div>
              <h3 className="font-sofia font-500 text-lg text-signal-orange mb-3">
                Daylight Saving Time
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                Some regions observe daylight saving time (DST), which shifts the clock forward by one hour during warmer months to extend evening daylight.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
