'use client';

import React from 'react';
import { motion } from 'motion/react';
import { slideInFromTopVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ServicesData } from '@/lib/constants';
import { ArrowRight, Check } from 'lucide-react';

const ServicesDetailedGrid = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const serviceFeatures: Record<number, string[]> = {
    1: ['Real-time sync', 'Offline mode', 'Conflict resolution', 'Auto-scaling', 'SSL encryption'],
    2: ['OAuth providers', 'JWT tokens', 'Biometric auth', 'Email verification', 'MFA support'],
    3: ['Auto-optimization', 'CDN enabled', 'Version control', 'Image compression', 'Bandwidth included'],
    4: ['Rate limiting', 'Auto-scaling', 'Custom domains', 'Auto-documentation', 'Mock endpoints'],
    5: ['Reliable delivery', 'Retry logic', 'Event filtering', 'Webhook signing', 'Batch processing'],
    6: ['Real-time dashboards', 'Custom metrics', 'Data export', 'Trend analysis', 'Performance insights'],
  };

  return (
    <motion.section
      ref={ref}
      className="w-full px-6 sm:px-8 md:px-12 py-12 md:py-24 bg-gradient-to-b from-black to-neutral-950"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            variants={slideInFromTopVariants}
          >
            Complete Service Overview
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto"
            variants={slideInFromTopVariants}
          >
            Explore detailed features and capabilities of each service to find the perfect fit for your needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {ServicesData.map((service, index) => {
            const ServiceIcon = service.icon;
            const features = serviceFeatures[service.id] || [];

            return (
              <motion.div
                key={service.id}
                className="group relative"
                variants={staggerItemVariants}
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {/* Card Content */}
                <div className="relative p-8 rounded-xl border border-neutral-800 bg-neutral-950/50 backdrop-blur hover:border-violet-600/50 transition-all duration-300 h-full flex flex-col">
                  {/* Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-violet-900/30 to-purple-900/30 group-hover:from-violet-900/50 group-hover:to-purple-900/50 transition-colors duration-300">
                      <div className="text-4xl">
                        <ServiceIcon />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-violet-500 opacity-30">
                      0{service.id}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 pt-6 border-t border-neutral-800">
                    {features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Check size={16} className="text-violet-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-neutral-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors group/link cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesDetailedGrid;
