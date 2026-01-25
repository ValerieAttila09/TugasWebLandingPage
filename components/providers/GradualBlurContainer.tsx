'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import GradualBlur from '@/components/ReactBits/GradualBlur';
import type { GradualBlurProps } from '@/components/ReactBits/GradualBlur';

interface GradualBlurContainerProps extends GradualBlurProps {
  scrollThreshold?: number;
}

const GradualBlurContainer: React.FC<GradualBlurContainerProps> = ({
  scrollThreshold = 30,
  ...gradualBlurProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  useGSAP(() => {
    if (containerRef.current) {
      if (isScrolled) {
        gsap.to(containerRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.8,
          ease: 'power2.out',
        });
      } else {
        gsap.to(containerRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.8,
          ease: 'power2.in',
        });
      }
    }
  }, { dependencies: [isScrolled] });

  return (
    <div ref={containerRef} style={{ opacity: 0, pointerEvents: 'none' }}>
      <GradualBlur {...gradualBlurProps} animated={false} />
    </div>
  );
};

export default GradualBlurContainer;
