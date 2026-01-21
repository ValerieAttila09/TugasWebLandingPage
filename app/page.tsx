"use client";

import Window from '@/components/landing/window/Window';
import openingImage from '../assets/images/keep-seen-from-the-sky.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useSidebarStore } from '@/lib/store/use-sidebar';
import { useRef } from 'react';
import WindowHidden from '@/components/landing/windowHidden/WindowHidden';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Page = () => {
  const { isOpen } = useSidebarStore();
  const overlayLayerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2, // smoothness factor
      effects: true, // enables data-speed parallax
    });

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
  }, { dependencies: [isOpen] });

  return (
    <div className="relative min-h-screen overflow-hidden w-full">
      <Window />
      <section>
        <div id="smooth-wrapper">
          <div id="smooth-content" className='relative w-full h-full overflow-hidden'>
            <Image src={openingImage} alt="Opening Image" className="absolute z-10 inset-x-0 w-full h-screen object-cover" />
            <div ref={overlayLayerRef} className='absolute z-30 inset-0 bg-white/30 backdrop-blur-sm hidden' />
            <WindowHidden>
              <h1 className="text-5xl text-white">TEST AJA INI YAA</h1>
            </WindowHidden>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page;
