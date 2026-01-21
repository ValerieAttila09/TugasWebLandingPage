'use client';

import { Button } from '@/components/ui/button';
import { landingPageNavMenu } from '@/lib/constants';
import { useSidebarStore } from '@/lib/store/use-sidebar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const sidebarAnimationRef = useRef<HTMLSpanElement[]>([]);
  const sidebarAnimationRefNd = useRef<HTMLSpanElement[]>([]);

  const animateToggleAnimation = (target: gsap.TweenTarget) => {
    gsap.fromTo(target, {
      x: '50%',
    }, {
      x: '200%',
      stagger: 0.05,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  const animateToggleAnimationNd = (target: gsap.TweenTarget) => {
    gsap.fromTo(target, {
      x: '-200%',
    }, {
      x: '50%',
      stagger: 0.05,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  const addToToggleRefs = (el: HTMLSpanElement | null) => {
    if (el && !sidebarAnimationRef.current.includes(el)) {
      sidebarAnimationRef.current.push(el);
    }
  };
  
  const addToToggleRefsNd = (el: HTMLSpanElement | null) => {
    if (el && !sidebarAnimationRefNd.current.includes(el)) {
      sidebarAnimationRefNd.current.push(el);
    }
  };

  useGSAP(() => {
    animateToggleAnimation(sidebarAnimationRef.current);
    animateToggleAnimationNd(sidebarAnimationRefNd.current);
  }, { dependencies: [] })

  return (
    <nav className='w-full flex items-center justify-between'>
      <div className=''>
        {/* SIDEBAR TOGGLE */}
        <Button
          onClick={toggleSidebar}
          type='button'
          onMouseEnter={() => {
            animateToggleAnimation(sidebarAnimationRef.current)
            animateToggleAnimationNd(sidebarAnimationRefNd.current)
          }}
          onMouseLeave={() => {
            animateToggleAnimation(sidebarAnimationRef.current)
            animateToggleAnimationNd(sidebarAnimationRefNd.current)
          }}
          variant={'ghost'}
          aria-label='Open navigation menu'
          className='relative overflow-hidden hover:bg-neutral-900 h-12 flex justify-center items-center w-[63px] border-r border-neutral-600/35'
        >
          <span className='absolute inset-0 flex flex-col justify-center items-start space-y-1'>
            <span ref={addToToggleRefs} className='w-8 h-px bg-neutral-300' />
            <span ref={addToToggleRefs} className='w-8 h-px bg-neutral-300' />
            <span ref={addToToggleRefs} className='w-8 h-px bg-neutral-300' />
          </span>
          <span className='absolute inset-0 flex flex-col justify-center items-start space-y-1'>
            <span ref={addToToggleRefsNd} className='w-8 h-px bg-neutral-300' />
            <span ref={addToToggleRefsNd} className='w-8 h-px bg-neutral-300' />
            <span ref={addToToggleRefsNd} className='w-8 h-px bg-neutral-300' />
          </span>
            
        </Button>
      </div>
      <div className='flex items-center gap-6'>
        {landingPageNavMenu.map((data) => {
          return (
            <Link
              key={data.label}
              href={data.href}
              className='flex items-center gap-1 justify-center font-normal min-w-12 max-w-20 relative'
            >
              <div className='w-[5px] h-1 bg-white'></div>
              <p className='text-xs text-white'>{data.label}</p>
            </Link>
          );
        })}
      </div>
      <div className=''>
        <Link href={'/sign-in'} className='font-regular text-sm px-4'>
          <span className='text-white'>SIGN IN</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
