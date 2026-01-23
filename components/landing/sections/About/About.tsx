import MagicBento from '@/components/ReactBits/MagicBento';
import { Button } from '@/components/ui/button';
import React from 'react';

const AboutSection = () => {
  return (
    <div className='min-h-screen w-full p-6 sm:p-12 md:p-18 grid grid-cols-12'>
      <div className="col-span-7 flex flex-col items-start justify-start gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-1 bg-white" />
          <h3 className="text-sm font-semibold text-white">ABOUT US</h3>
        </div>
        <h1 className="max-w-xl text-5xl font-semibold text-white">A Digital Studio Focused on Clarity & Impact</h1>
      </div>
      <div className="col-span-5">
        <p className="text-lg text-neutral-300 font-thin">
          We help brands and products communicate clearly through thoughtful design and solid engineering
        </p>
        <br />
        <p className="text-lg text-neutral-300 font-thin">
          By combining modern technologies, clean visual systems, and purposeful motion, we create digital experiences that are not only visually compelling, but also functional, scalable, and user-focused.
        </p>
        <br />
        <Button variant={'ghost'} className='rounded-sm border border-neutral-800 hover:bg-neutral-950 text-neutral-300 hover:text-white'>Read more</Button>
      </div>
      <div className="col-span-12 flex items-center justify-center py-4">
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
      </div>
    </div>
  );
}

export default AboutSection;