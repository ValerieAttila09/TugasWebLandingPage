'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PricingSectionData } from '@/lib/constants';
import { InfoIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { slideInFromLeftVariants, slideInFromRightVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import React, { useState } from 'react';

const PricingSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  const [pricingSelection, setPricingSelection] = useState({ category: "" });

  return (
    <motion.div
      ref={ref}
      className='w-full bg-linear-to-b from-black to-[#070609] border-y border-neutral-800 px-6 sm:px-8 md:px-12 py-12 md:py-24'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
        <motion.div className="col-span-1 md:col-span-1 space-y-12 md:space-y-32 pr-0 md:pr-6 md:border-r border-neutral-800">
        {PricingSectionData.pricingDescription.map((data, index) => {
          return (
            <motion.div
              key={data.title}
              className="space-y-6"
              variants={slideInFromLeftVariants}
              transition={{ delay: index * 0.1 }}
            >
              <motion.span
                className="text-xs sm:text-sm md:text-sm text-neutral-500 font-semibold tracking-wider uppercase"
                variants={staggerItemVariants}
              >
                {data.label}
              </motion.span>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-3xl text-white font-bold"
                variants={staggerItemVariants}
              >
                {data.title}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-base text-neutral-400 font-normal leading-relaxed"
                variants={staggerItemVariants}
              >
                {data.description}
              </motion.p>
              {data.additionalContent && (
                <motion.div
                  className="rounded-md flex items-center gap-1 px-4 py-2 border border-neutral-700"
                  variants={staggerItemVariants}
                >
                  <InfoIcon className='text-neutral-400 w-3 h-3' />
                  <span className="text-sm font-thin text-neutral-300">
                    {data.additionalContent}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        </motion.div>
        <motion.div className="col-span-1 md:col-span-1 space-y-3 md:space-y-4">
        {PricingSectionData.pricingOfferDetail.map((data, index) => {
          const isActiveSelection = data.title == pricingSelection.category;
          const setColor = isActiveSelection ? "border-violet-900 shadow-lg shadow-purple-950 bg-[#080510]" : "border-neutral-800 shadow-none bg-[#060407]";
          return (
            <motion.div
              key={data.title}
              onClick={() => setPricingSelection({ category: data.title })}
              className={`relative cursor-pointer w-full rounded-lg border border-neutral-800 p-10 hover:border-violet-950 transition-all ${setColor}`}
              variants={slideInFromRightVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <h1 className="text-lg sm:text-2xl text-white font-bold">{data.title}</h1>
                  <p className="text-sm text-neutral-400 font-normal mt-1">{data.subtitle}</p>
                </div>
                <span className="flex items-center gap-0.5">
                  <span className="text-3xl sm:text-4xl text-white font-bold">{data.price}</span>
                  <span className="text-xs sm:text-sm text-neutral-400 font-normal">{data.price == "FREE" ? "" : "/month"}</span>
                </span>
              </div>
              <Separator className='my-6 bg-neutral-700' />
              <div className="w-full grid sm:not-first:grid-cols-2 gap-2">
                {data.guaranteedServices.map((guaranteedServicesData, i) => (
                  <motion.span
                    key={guaranteedServicesData}
                    className="col-span-1 flex items-center gap-2"
                    variants={staggerItemVariants}
                    transition={{ delay: i * 0.05 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span className="text-sm text-neutral-400 font-normal">
                      {guaranteedServicesData}
                    </span>
                  </motion.span>
                ))}
              </div>
              <Separator className='my-6 bg-neutral-700' />
              <div className="w-full grid grid-cols-2 gap-2">
                {data.benefits.map((benefitsData, i) => {
                  return (
                    <motion.div
                      key={benefitsData}
                      className="col-span-1 flex items-center gap-2"
                      variants={staggerItemVariants}
                      transition={{ delay: i * 0.05 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm sm:text-md text-neutral-300 font-thin text-wrap">{benefitsData}</span>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-10">
                <Button variant={'default'} className={`w-full rounded-sm border ${isActiveSelection ? "border-neutral-800 bg-neutral-100 text-neutral-800 hover:bg-white hover:border-neutral-400" : "border-neutral-800 bg-neutral-950 hover:bg-neutral-900 hover:border-neutral-700"}`}>Get Started</Button>
              </div>
              {isActiveSelection && (
                <motion.div
                  className="absolute -top-3 -right-3 size-8 rounded-full shadow-md shadow-green-950 border border-green-900 bg-neutral-950 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PricingSection;