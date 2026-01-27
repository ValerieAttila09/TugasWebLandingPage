'use client';

import DecryptedText from '@/components/ReactBits/DecryptedText';
import { Button } from '@/components/ui/button';
import { landingPageSidebarMenu } from '@/lib/constants';
import { useSidebarStore } from '@/lib/store/use-sidebar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState<IsHovered>({ isHovered: false, elementId: '' });
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [menuWidths, setMenuWidths] = useState<Record<string, number>>({});
  const { isOpen, toggleSidebar } = useSidebarStore();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (sidebarRef.current && overlayRef.current) {
        if (isOpen) {
          // Animate sidebar
          gsap.to(sidebarRef.current, {
            x: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          });
          // Animate overlay
          gsap.to(overlayRef.current, {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.5,
            ease: 'power3.inOut',
          });
          // Disable body scroll
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
        } else {
          // Animate sidebar
          gsap.to(sidebarRef.current, {
            x: '-100%',
            duration: 0.5,
            ease: 'power3.inOut',
          });
          // Animate overlay
          gsap.to(overlayRef.current, {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.5,
            ease: 'power3.inOut',
          });
          // Enable body scroll
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = '0px';
        }
      }
    },
    { dependencies: [isOpen] }
  );

  // Handle scroll lock to prevent scrolling when sidebar is open
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
      
      // Prevent scroll on touch devices
      const preventScroll = (e: Event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
          e.preventDefault();
        }
      };
      document.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', preventScroll);
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
      };
    }
  }, [isOpen]);

  // Initialize sidebar to be off-screen on load
  useLayoutEffect(() => {
    if (sidebarRef.current) {
      gsap.set(sidebarRef.current, { x: '-100%' });
    }
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0, pointerEvents: 'none' });
    }
  }, []);

  useLayoutEffect(() => {
    const widths: Record<string, number> = {};
    landingPageSidebarMenu.forEach((data) => {
      if (menuRefs.current[data.label]) {
        widths[data.label] = menuRefs.current[data.label]!.offsetWidth;
      }
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuWidths(widths);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={toggleSidebar}
        className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40 opacity-0 pointer-events-none lg:hidden'
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className='fixed top-0 left-0 bottom-0 z-50 lg:hidden bg-black border-r border-neutral-800 overflow-hidden w-full sm:w-1/2'
      >
        <div className='w-full h-full relative flex flex-col justify-between'>
          {/* Header */}
          <div className='pt-20 px-6 sm:px-8 pb-8 border-b border-neutral-800'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-[5px] h-1 bg-white' />
              <p className='text-xs text-white font-semibold'>NAVIGATION</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className='flex-1 overflow-y-auto px-6 sm:px-8 py-8'>
            <div className='space-y-4'>
              {landingPageSidebarMenu.map((data, i) => {
                const isActivePage = data.href == pathname;
                return (
                  <Link
                    key={data.label}
                    href={data.href}
                    onClick={toggleSidebar}
                    className='block group'
                  >
                    <div
                      className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActivePage
                          ? 'bg-violet-500/20 border border-violet-500/50'
                          : 'bg-neutral-900/50 border border-neutral-800 hover:border-violet-500/50'
                      }`}
                    >
                      <div className='flex items-center justify-between'>
                        <h3 className={`text-sm sm:text-base font-semibold ${
                          isActivePage ? 'text-violet-400' : 'text-neutral-200 group-hover:text-white'
                        }`}>
                          {data.label}
                        </h3>
                        {isActivePage && (
                          <div className='w-2 h-2 rounded-full bg-violet-500' />
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className='px-6 sm:px-8 py-8 border-t border-neutral-800'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-[5px] h-1 bg-white' />
              <p className='text-xs text-white font-semibold'>QUICK LINKS</p>
            </div>
            <div className='space-y-3'>
              <Link href={'/#'} className='block text-sm text-neutral-400 hover:text-white transition-colors'>
                Documentation
              </Link>
              <Link href={'/#'} className='block text-sm text-neutral-400 hover:text-white transition-colors'>
                Contact Support
              </Link>
              <Link href={'/#'} className='block text-sm text-neutral-400 hover:text-white transition-colors'>
                &copy; 2026 XENORA
              </Link>
            </div>
          </div>

          <div/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
