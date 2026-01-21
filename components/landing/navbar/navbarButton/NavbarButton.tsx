import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/lib/store/use-sidebar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const NavbarButton = () => {
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
  }, { dependencies: [] });
  return (
    <Button
      onClick={toggleSidebar}
      type='button'
      onMouseEnter={() => {
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
  );
}

export default NavbarButton;