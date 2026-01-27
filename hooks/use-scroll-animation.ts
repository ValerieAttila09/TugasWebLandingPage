'use client';

import { useRef, useEffect, useState } from 'react';
import { useMotionTemplate, useMotionValue } from 'motion/react';

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

/**
 * Hook untuk trigger animasi ketika element masuk ke viewport
 * @param options - Configuration options
 * @returns ref untuk di-attach ke element dan controls untuk animation
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.2, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  return { ref, isInView };
};

/**
 * Hook untuk parallax scroll effect
 */
export const useParallax = (offset: number = 50) => {
  const y = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      y.set(scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);

  return y;
};

/**
 * Hook untuk scroll-based progress
 */
export const useScrollProgress = () => {
  const progress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      progress.set(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [progress]);

  return progress;
};
