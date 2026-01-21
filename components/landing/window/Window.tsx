'use client';

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { useSidebarStore } from '@/lib/store/use-sidebar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

const Window = () => {

  const { isOpen } = useSidebarStore();
  const overlayLayerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(overlayLayerRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => {
            overlayLayerRef.current?.classList.remove('hidden');
          }
        });
      } else {
        gsap.to(overlayLayerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            overlayLayerRef.current?.classList.add('hidden');
          }
        });
      }
    },
    { dependencies: [isOpen] }
  );
  return (
    <div className='fixed z-100 inset-5 bg-transparent border border-neutral-400/35 rounded-lg overflow-hidden'>
      <div className='w-full relative h-full overflow-hidden'>
        <Sidebar />
        <div className='absolute z-5 top-0 inset-x-0 w-full border-b border-neutral-400/35'>
          <Navbar />
        </div>
        <div className='absolute z-4 left-0 inset-y-0 h-full w-16 border-r border-neutral-400/35 flex items-end justify-center'>
          <div className='relative w-full h-full'></div>
          <div className='absolute py-2 z-6 bottom-0 inset-x-0 flex flex-col justify-center items-center left-0 min-w-14 space-y-0.5'>
            <div className='w-2 h-px bg-black' />
            <div className='w-5 h-px bg-black' />
            <div className='w-3 h-px bg-black' />
            <div className='w-2 h-px bg-black' />
            <div className='w-4 h-px bg-black' />
            <div className='w-6 h-px bg-black' />
            <div className='w-7 h-px bg-black' />
            <div className='w-8 h-px bg-black' />
            <div className='w-5 h-px bg-black' />
            <div className='w-7 h-px bg-black' />
            <div className='w-6 h-px bg-black' />
            <div className='w-5 h-px bg-black' />
            <div className='w-7 h-px bg-black' />
            <div className='w-1 h-px bg-black' />
            <div className='w-3 h-px bg-black' />
            <div className='w-6 h-px bg-black' />
            <div className='w-2 h-px bg-black' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Window;
