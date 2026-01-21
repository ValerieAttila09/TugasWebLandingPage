"use client";

import openingImage from '../assets/images/keep-seen-from-the-sky.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useSidebarStore } from '@/lib/store/use-sidebar';
import { useRef } from 'react';

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
    <div className="relative min-h-screen w-full">
      <div ref={overlayLayerRef} className='absolute z-30 inset-0 bg-black/30 backdrop-blur-sm hidden' />
      <section className='px-24 py-[68px]'>
        <h1 className="text-5xl text-black font-bold">Lorem ipsum dolor sit amet.</h1>
      </section>
    </div>
  );
}

export default Page;
