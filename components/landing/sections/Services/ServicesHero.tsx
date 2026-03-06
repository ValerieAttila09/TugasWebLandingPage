'use client';

import React from 'react';
import { motion } from 'motion/react';
import { slideInFromTopVariants, slideInFromBottomVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

const ServicesHero = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-[60vh] md:min-h-[70vh] px-6 sm:px-8 md:px-12 py-12 md:py-24 flex items-center justify-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          className="mb-6"
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
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            variants={slideInFromTopVariants}
          >
            <div className="w-2 h-1 bg-white" />
            <h3 className="text-xs sm:text-xs md:text-sm font-semibold tracking-wider text-white/80">OUR SERVICES</h3>
            <div className="w-2 h-1 bg-white" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={slideInFromTopVariants}
          >
            Powerful Backend Services
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-8"
            variants={slideInFromTopVariants}
          >
            Everything you need to build, deploy, and scale modern applications. From real-time databases to authentication, we've got your backend covered.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={slideInFromBottomVariants}>
            <Button
              variant={'default'}
              className='rounded-full flex items-center justify-center p-px group bg-linear-to-tr from-violet-500 via-purple-600 to-violet-200 text-xs sm:text-sm'
            >
              <div className="w-full h-full rounded-full bg-neutral-950 px-6 sm:px-8 py-3 flex items-center justify-center group-hover:bg-neutral-900 transition-all whitespace-nowrap">
                <span className="text-white font-semibold">Get Started</span>
              </div>
            </Button>
          </motion.div>
          <motion.div variants={slideInFromBottomVariants}>
            <Button
              variant={'ghost'}
              className='rounded-full bg-neutral-950 border border-neutral-700 text-neutral-200 hover:bg-neutral-900 hover:text-neutral-300 text-xs sm:text-sm whitespace-nowrap'
            >
              View Documentation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
