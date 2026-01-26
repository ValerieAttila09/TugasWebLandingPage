import { DottedMap } from '@/components/ReactBits/DottedMaps';
import { Button } from '@/components/ui/button';
import { DottedMapMarkersData } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import DashboardImage from '@/assets/images/edited-dashboard-image.jpeg'

const ProjectsSection = () => {
  return (
    <>
      <div className="relative h-[680px] w-full overflow-hidden">
        <div className="to-black absolute inset-0 bg-radial from-transparent to-70%" />
        <DottedMap markers={DottedMapMarkersData} />
        <div className="absolute bg-transparent z-5 inset-0 w-full h-full flex flex-col items-center justify-start container-wrapper gap-4">
          <h1 className="max-w-3xl text-center text-4xl text-white font-medium flex flex-col justify-center items-center">
            <span className="">Trusted by developers, ready for agents.</span>
            <span className="">Build and scale applications faster with Xenora.</span>
          </h1>
          <div className="flex items-center gap-3">
            <Button variant={'outline'} className='rounded-full'>Get Started</Button>
            <Button variant={'ghost'} className='rounded-full text-white'>Read Our Docs</Button>
          </div>
        </div>
        <div className="absolute z-2 -bottom-1/5 inset-x-1/4 w-auto h-auto border border-neutral-700 bg-neutral-900/30 backdrop-blur-sm rounded-xl p-3">
          <Image src={DashboardImage} alt='Dashboard Image' width={620} height={480} className='w-3xl h-auto rounded-lg' />
        </div>
        <div className="absolute z-3 bottom-0 inset-x-0 w-full h-36 bg-linear-to-t from-black to-transparent" />
      </div>
    </>
  );
}

export default ProjectsSection;