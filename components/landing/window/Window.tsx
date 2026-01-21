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
    <div className='fixed z-60 inset-5 bg-transparent border border-neutral-400/35 rounded-lg overflow-hidden'>
      <div className='w-full relative h-full overflow-hidden'>
        <Sidebar />
        
      </div>
    </div>
  );
};

export default Window;
