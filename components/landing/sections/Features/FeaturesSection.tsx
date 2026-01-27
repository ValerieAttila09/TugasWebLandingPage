'use client';

import React from 'react';
import { FeaturesSectionData } from '@/lib/constants';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { slideInFromLeftVariants, slideInFromRightVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const FeaturesSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  // Extract unique keywords from descriptions for sub-items
  const featureKeywords = [
    { main: 'Backend as a Service', items: ['Deploy APIs', 'Authentication', 'Data Management', 'Zero Overhead'] },
    { main: 'Real-time Database', items: ['Data Sync', 'Collaborative Apps', 'Live Dashboards', 'Responsive UX'] },
    { main: 'Orchestration & Automation', items: ['Workflows', 'Task Scheduling', 'Service Integration', 'Orchestration Tools'] },
    { main: 'Developer-Friendly APIs', items: ['REST APIs', 'WebSocket APIs', 'Multiple SDKs', 'Code Examples'] },
  ];

  return (
    <motion.div
      ref={ref}
      className='w-full px-4 sm:px-6 md:px-12 py-12 md:py-24'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      {/* Header Section */}
      <motion.div className="max-w-7xl mx-auto mb-12 md:mb-20" variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      >
        <div className="mb-6">
          <motion.p
            className="text-xs sm:text-xs md:text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4"
            variants={staggerItemVariants}
          >
            SERVICES WE PROVIDE
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6"
            variants={slideInFromLeftVariants}
          >
            Our comprehensive approach to delivering exceptional results through powerful platform capabilities
          </motion.h2>
        </div>

        <motion.div variants={staggerItemVariants}>
          <Link href="#contact" className="inline-flex items-center gap-2 text-neutral-400 hover:text-violet-500 transition-colors group">
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Get in touch</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div className="max-w-7xl mx-auto" variants={{
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Main Features */}
          <motion.div className="flex flex-col justify-between space-y-6 sm:space-y-8" variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          >
            {FeaturesSectionData.map((feature, index) => (
              <motion.div key={index} className="group" variants={slideInFromLeftVariants}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 sm:text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Feature Items */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          >
            {featureKeywords.map((feature, rowIndex) => (
              <motion.div key={rowIndex} className="space-y-3 p-6 rounded-xl border border-neutral-800 hover:border-violet-900 bg-neutral-900/50 hover:bg-violet-950/20 transition-all duration-300" variants={slideInFromRightVariants}>
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-4">{feature.main}</h4>
                <div className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <motion.div key={idx} className="flex items-start gap-3" variants={staggerItemVariants}>
                      <div className="size-5 rounded-full bg-neutral-950 border border-green-900 flex items-center justify-center shrink-0 mt-1">
                        <Check size={10} className="text-green-700" strokeWidth={3} />
                      </div>
                      <span className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FeaturesSection;