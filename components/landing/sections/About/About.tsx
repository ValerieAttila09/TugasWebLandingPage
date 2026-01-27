'use client';

import MagicBento from '@/components/ReactBits/MagicBento';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { slideInFromLeftVariants, slideInFromRightVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import React from 'react';

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className='w-full px-4 sm:px-6 md:px-12 py-12 md:py-24'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12'>
        <motion.div
          className="col-span-1 md:col-span-7 flex flex-col items-start justify-start gap-4"
          variants={slideInFromLeftVariants}
        >
          <motion.div
            className="flex items-center gap-3"
            variants={slideInFromLeftVariants}
          >
            <div className="w-2 h-1 bg-white" />
            <h3 className="text-xs sm:text-xs md:text-sm font-semibold tracking-wider text-white/80">ABOUT XENORA</h3>
          </motion.div>
          <motion.h1
            className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
            variants={slideInFromLeftVariants}
          >
          Backend as a Service Platform for Modern Development
        </motion.h1>
        </motion.div>
        <motion.div
          className="col-span-1 md:col-span-5"
          variants={slideInFromRightVariants}
        >
          <motion.p
            className="text-sm sm:text-base md:text-base lg:text-lg text-neutral-400 font-normal leading-relaxed"
            variants={staggerItemVariants}
          >
          Xenora is a comprehensive Backend as a Service (BaaS) platform designed to accelerate your application development with powerful, ready-to-use features and infrastructure.
          </motion.p>
          <br />
          <motion.p
            className="text-sm sm:text-base md:text-base lg:text-lg text-neutral-400 font-normal leading-relaxed"
            variants={staggerItemVariants}
          >
          From application and web development to orchestration, real-time databases, and beyond, Xenora provides the tools and services you need to build, scale, and manage modern digital applications with ease and efficiency.
          </motion.p>
          <br />
          <motion.div
            variants={staggerItemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant={'ghost'} className='rounded-sm border border-neutral-800 hover:bg-neutral-950 text-neutral-300 hover:text-white text-xs sm:text-sm'>Read more</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="col-span-1 md:col-span-12 flex items-center justify-center py-4 md:py-8"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
          }}
        >
        <MagicBento
          textAutoHide={true}
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutSection;