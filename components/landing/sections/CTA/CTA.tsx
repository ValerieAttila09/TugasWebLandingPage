'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import { slideInFromLeftVariants, slideInFromRightVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import React from 'react';

const CTA_Section = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className='w-full bg-linear-to-t from-[#120912] via-[#070509] to-black px-4 sm:px-6 md:px-12 py-12 md:py-24'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20'>
        <motion.div
          className="md:col-span-6"
          variants={slideInFromLeftVariants}
        >
          <motion.div
            className="w-full p-6 space-y-4 rounded-lg border border-neutral-800 bg-neutral-950"
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
          <motion.h1
            className="text-white font-bold text-2xl sm:text-3xl"
            variants={staggerItemVariants}
          >
            Supercharge your workflow today
          </motion.h1>
          <motion.p
            className="text-neutral-400 font-normal text-sm sm:text-base"
            variants={staggerItemVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit et quo doloremque, cum sapiente tenetur quaerat. Voluptate quam autem illo veritatis! Quia, libero.
          </motion.p>
          <motion.div
            className="flex items-center gap-3"
            variants={{
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
            <motion.div
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant={'default'} className='rounded-sm border border-neutral-800'>Get Started</Button>
            </motion.div>
            <motion.div
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant={'outline'} className='rounded-sm border border-neutral-400'>Learn More</Button>
            </motion.div>
          </motion.div>
        </motion.div>
        </motion.div>
        <motion.div
          className="md:col-span-6"
          variants={slideInFromRightVariants}
        >
          <motion.div
            className="w-full space-y-3"
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
          <motion.div className="space-y-2" variants={staggerItemVariants}>
            <h1 className="text-2xl sm:text-3xl text-white font-bold">99.9%</h1>
            <p className="text-sm sm:text-base text-neutral-400 font-normal">system uptime guaranteed</p>
          </motion.div>
          <Separator className='my-1 bg-neutral-800'/>
          <motion.div className="space-y-2" variants={staggerItemVariants}>
            <h1 className="text-2xl sm:text-3xl text-white font-bold">10k+</h1>
            <p className="text-sm sm:text-base text-neutral-400 font-normal">companies using our platform</p>
          </motion.div>
          <Separator className='my-1 bg-neutral-800'/>
          <motion.div className="space-y-2" variants={staggerItemVariants}>
            <h1 className="text-2xl sm:text-3xl text-white font-bold">1M+</h1>
            <p className="text-sm sm:text-base text-neutral-400 font-normal">automated tasks run daily</p>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CTA_Section;