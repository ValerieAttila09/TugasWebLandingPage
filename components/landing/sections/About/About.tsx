import MagicBento from '@/components/ReactBits/MagicBento';
import { Button } from '@/components/ui/button';
import React from 'react';

const AboutSection = () => {
  return (
    <div className='min-h-screen w-full p-6 sm:p-12 md:p-18 grid grid-cols-12'>
      <div className="col-span-7 flex flex-col items-start justify-start gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-1 bg-white" />
          <h3 className="text-sm font-semibold text-white">ABOUT XENORA</h3>
        </div>
        <h1 className="max-w-xl text-5xl font-semibold text-white">Backend as a Service Platform for Modern Development</h1>
      </div>
      <div className="col-span-5">
        <p className="text-lg text-neutral-300 font-thin">
          Xenora is a comprehensive Backend as a Service (BaaS) platform designed to accelerate your application development with powerful, ready-to-use features and infrastructure.
        </p>
        <br />
        <p className="text-lg text-neutral-300 font-thin">
          From application and web development to orchestration, real-time databases, and beyond, Xenora provides the tools and services you need to build, scale, and manage modern digital applications with ease and efficiency.
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