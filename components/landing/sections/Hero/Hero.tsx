import { Button } from '@/components/ui/button';
import { HeroSectionContent } from '@/types/interfaces';
import React from 'react';

const HeroSection = ({ headline, subHeadline, primaryCTA, secondaryCTA }: HeroSectionContent) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-6'>
      <div className="rounded-full flex items-center justify-center p-px group bg-linear-to-tr from-[#83Bd11] via-[#68b643] to-white">
        <div className="w-full h-full rounded-full bg-neutral-900 px-3 py-1 flex items-center justify-center gap-2 group-hover:bg-neutral-800 transition-all">
          <div className="size-1 bg-[#83BD11]" />
          <span className="text-xs font-medium text-[#83BD11]">POWERED BY AI</span>
          <div className="size-1 bg-[#83BD11]" />
        </div>
      </div>
      <div className="max-w-3xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-[56px]/14 text-white font-bold">{headline}</h1>
        <h3 className="text-center text-md text-neutral-300 font-normal">{subHeadline}</h3>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant={'default'} className='rounded-full flex items-center justify-center p-px group bg-linear-to-tr from-[#83Bd11] via-[#68b643] to-white'>
          <div className="w-full h-full rounded-full bg-neutral-900 px-5 py-2 flex items-center justify-center group-hover:bg-neutral-800 transition-all">
            <span className="text-white">
              {primaryCTA}
            </span>
          </div>
        </Button>
        <Button variant={'ghost'} className='rounded-full bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-950 hover:text-neutral-300'>{secondaryCTA}</Button>
      </div>
    </div>
  );
}

export default HeroSection;