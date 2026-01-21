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

const Sidebar = () => {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState<IsHovered>({ isHovered: false, elementId: '' });
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [menuWidths, setMenuWidths] = useState<Record<string, number>>({});
  const { isOpen, toggleSidebar } = useSidebarStore();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(sidebarRef.current, {
          x: 0,
          duration: 0.5,
          ease: 'power3.inOut',
        });
      } else {
        gsap.to(sidebarRef.current, {
          x: '-100%',
          duration: 0.5,
          ease: 'power3.inOut',
        });
      }
    },
    { dependencies: [isOpen] }
  );

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
      <div
        ref={sidebarRef}
        className='absolute z-50 inset-y-0 left-0 sm:w-[720px] bg-black rounded-r-lg border border-neutral-400/35 -translate-x-full'
      >
        <div className='w-full h-full relative flex justify-between overflow-hidden'>
          <div className='w-full relative flex flex-col justify-between'>
            <div className='w-full p-8 h-full flex items-start justify-start'>
              <div className='w-1/4'>
                <div className='flex items-center gap-2'>
                  <div className='w-[5px] h-1 bg-white' />
                  <p className='text-xs text-white'>DISCOVER</p>
                </div>
              </div>
              <div className='w-full space-y-2'>
                {landingPageSidebarMenu.map((data, i) => {
                  const isActivePage =
                    data.href == pathname ? 'bg-[#83Bd11] text-black' : 'bg-black text-white';
                  return (
                    <div
                      key={data.label}
                      className='relative flex justify-start items-start gap-3 w-full'
                    >
                      <div className='relative w-auto'>
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 24,
                            height: 24,
                            scale: 1.2,
                            background: '#000',
                            clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
                            zIndex: 2,
                          }}
                        />
                        <div
                          ref={(el) => {
                            if (el) menuRefs.current[data.label] = el;
                          }}
                          onMouseEnter={() => setIsHovering({ isHovered: true, elementId: data.label })}
                          onMouseLeave={() => setIsHovering({ isHovered: false, elementId: data.label })}
                        >
                          <DecryptedText
                            style={{ width: `${menuWidths[data.label] + 8}px` || 'auto' }}
                            parentClassName={`${isActivePage} cursor-pointer rounded font-bold hover:bg-white hover:text-black ps-2 pe-6 block`}
                            className='text-[4.2rem]/20'
                            encryptedClassName='text-[4.2rem]/20'
                            speed={50}
                            maxIterations={25}
                            text={data.label}
                            animateOn='hover'
                            revealDirection='start'
                            sequential
                            useOriginalCharsOnly={false}
                          />
                        </div>
                      </div>
                      {pathname == data.href ? (
                        <DecryptedText
                          text={`PAGE.00${i + 1}`}
                          sequential
                          useOriginalCharsOnly={false}
                          speed={50}
                          maxIterations={25}
                          revealDirection='start'
                          className={'text-xs text-[#83Bd11] font-regular'}
                          encryptedClassName='text-xs'
                          animateOnParent={true}
                        />
                      ) : isHovering.isHovered && isHovering.elementId === data.label ? (
                        <DecryptedText
                          text={`PAGE.00${i + 1}`}
                          sequential
                          useOriginalCharsOnly={false}
                          speed={50}
                          maxIterations={25}
                          revealDirection='start'
                          parentClassName={`${isActivePage}`}
                          className='text-xs'
                          encryptedClassName='text-xs'
                          animateOnParent={true}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='w-full p-8 border-t border-neutral-700 flex items-start justify-start'>
              <div className='w-1/4 py-0.5'>
                <div className='flex items-center gap-2'>
                  <div className='w-[5px] h-1 bg-white' />
                  <p className='text-sm text-white'>DISCOVER</p>
                </div>
              </div>
              <div className='w-full'>
                <Link href={'/#'}>
                  <p className='text-white text-lg'>TEST LINK</p>
                </Link>
                <Link href={'/#'}>
                  <p className='text-white text-lg'>TEST LINK</p>
                </Link>
              </div>
            </div>
            <div className='w-auto p-8 border-t border-neutral-700 flex items-center justify-start'>
              <div className='w-1/4'>
                <div className='flex items-center gap-2'>
                  <div className='w-[5px] h-1 bg-white' />
                  <p className='text-sm text-white'>DISCOVER</p>
                </div>
              </div>
              <div className='w-full space-y-2'>
                <span className='text-neutral-600 text-lg'>&copy; 2026</span>
              </div>
            </div>
          </div>
          <div className='w-18 border-l border-neutral-700 flex flex-col justify-between'>
            <Button
              onClick={toggleSidebar}
              aria-label='Close button'
              className='w-full rounded-tr-lg h-[49px] relative flex items-center justify-center border-b border-neutral-700 bg-black group transition-all'
            >
              <div className='absolute w-6 h-px bg-white rotate-45' />
              <div className='absolute w-6 h-px bg-white -rotate-45' />
            </Button>
            <div className='w-full h-full'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
