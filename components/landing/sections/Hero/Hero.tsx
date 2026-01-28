'use client';

import FloatingLines from '@/components/ReactBits/FloatingLines';
import { Button } from '@/components/ui/button';
import { HeroSectionContent } from '@/types/interfaces';
import CountUpSection from './CountUp';
import { motion } from 'motion/react';
import { slideInFromTopVariants, slideInFromBottomVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const HeroSection = ({ headline, subHeadline, primaryCTA, secondaryCTA }: HeroSectionContent) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className='relative w-full min-h-screen md:h-screen overflow-hidden'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
      }}
    >
      <div className="absolute z-1 inset-0 w-full h-full">
        <div className='w-full h-full relative'>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-2 flex flex-col justify-center items-center gap-6 px-4 sm:px-8 md:px-12 py-12 md:py-0">
        <motion.div
          className="w-full max-w-4xl flex flex-col items-center justify-center gap-4"
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
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold text-center leading-tight"
            variants={slideInFromTopVariants}
          >
            {headline}
          </motion.h1>
          <motion.h3
            className="text-sm sm:text-base md:text-base lg:text-lg text-neutral-400 font-normal text-center max-w-2xl"
            variants={slideInFromTopVariants}
          >
            {subHeadline}
          </motion.h3>
        </motion.div>
        <motion.div
          className="flex sm:flex-row items-center justify-center gap-3"
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
            <Button variant={'default'} className='rounded-full flex items-center justify-center p-px group bg-linear-to-tr from-violet-500 via-purple-600 to-violet-200 text-xs sm:text-sm'>
              <div className="w-full h-full rounded-full bg-neutral-950 px-4 sm:px-5 py-2 flex items-center justify-center group-hover:bg-neutral-900 transition-all whitespace-nowrap">
                <span className="text-white">
                  {primaryCTA}
                </span>
              </div>
            </Button>
          </motion.div>
          <motion.div variants={slideInFromBottomVariants}>
            <Button variant={'ghost'} className='rounded-full bg-neutral-950 border border-neutral-700 text-neutral-200 hover:bg-neutral-900 hover:text-neutral-300 text-xs sm:text-sm whitespace-nowrap'>{secondaryCTA}</Button>
          </motion.div>
        </motion.div>
      </div>
      <CountUpSection/>
    </motion.div>
  );
}

export default HeroSection;