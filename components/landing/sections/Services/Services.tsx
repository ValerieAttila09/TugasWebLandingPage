'use client';

import React from 'react';
import { motion } from 'motion/react';
import { slideInFromTopVariants, slideInFromLeftVariants, slideInFromRightVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ServicesData } from '@/lib/constants';

const ServicesSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      className='w-full px-6 sm:px-8 md:px-12 py-12 md:py-24'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <motion.div className="max-w-7xl mx-auto">
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
            Powerful Services
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto"
            variants={slideInFromTopVariants}
          >
            Everything you need to build, deploy, and scale modern applications with confidence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {ServicesData.map((service, index) => {
            const ServicesIcons = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group p-8 rounded-lg border border-neutral-800 bg-neutral-950 hover:border-violet-900 transition-all duration-300"
                variants={staggerItemVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(12, 8, 24, 0.8)',
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="text-5xl mb-6 inline-block p-4 rounded-lg bg-neutral-900 group-hover:bg-violet-900/20 transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <ServicesIcons/>
                </motion.div>

                <motion.h3
                  className="text-lg sm:text-xl font-bold text-white mb-3"
                  variants={staggerItemVariants}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed"
                  variants={staggerItemVariants}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="mt-6 h-1 bg-linear-to-r from-violet-600 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ServicesSection;