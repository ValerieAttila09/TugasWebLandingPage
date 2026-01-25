import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const CTA_Section = () => {
  return (
    <div className='bg-linear-to-t from-[#120912] via-[#070509] to-black w-full px-6 py-10 sm:px-12 sm:py-16 md:py-20 md:px-18 grid md:grid-cols-12 gap-8 md:gap-18'>
      <div className="md:col-span-7">
        <div className="w-full p-6 space-y-4 rounded-lg border border-neutral-800 bg-neutral-950">
          <h1 className="text-white font-medium text-2xl">Supercharge your workflow today</h1>
          <p className="text-neutral-300 font-thin text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit et quo doloremque, cum sapiente tenetur quaerat. Voluptate quam autem illo veritatis! Quia, libero.</p>
          <div className="flex items-center gap-3">
            <Button variant={'default'} className='rounded-sm border border-neutral-800'>Get Started</Button>
            <Button variant={'outline'} className='rounded-sm border border-neutral-400'>Learn More</Button>
          </div>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="w-full space-y-3">
          <div className="space-y-2">
            <h1 className="text-2xl text-white font-medium">99.9%</h1>
            <p className="text-neutral-300 font-thin text-md">system uptime guaranteed</p>
          </div>
          <Separator className='my-1 bg-neutral-800'/>
          <div className="space-y-2">
            <h1 className="text-2xl text-white font-medium">10k+</h1>
            <p className="text-neutral-300 font-thin text-md">companies using our platform</p>
          </div>
          <Separator className='my-1 bg-neutral-800'/>
          <div className="space-y-2">
            <h1 className="text-2xl text-white font-medium">1M+</h1>
            <p className="text-neutral-300 font-thin text-md">automated tasks run daily</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA_Section;