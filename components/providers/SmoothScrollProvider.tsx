'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const proxyRef = useRef({ y: 0, isScrolling: false });
  const speedRef = useRef(0);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    // Hanya aktifkan di desktop
    if (typeof window === 'undefined' || window.innerWidth < 768) {
      return;
    }

    const proxy = proxyRef.current;
    const html = document.documentElement;
    let scrollTimeout: NodeJS.Timeout;

    const clamp = (value: number, min: number, max: number) => {
      return Math.max(min, Math.min(max, value));
    };

    const handleWheel = (e: WheelEvent) => {
      // Hanya intercept jika ada deltaY
      if (e.deltaY === 0) return;

      e.preventDefault();

      // Hitung scroll speed untuk inertia
      const now = Date.now();
      const timeDelta = now - lastTimeRef.current;
      speedRef.current = (e.deltaY / timeDelta) * 16; // Normalize ke 60fps
      lastTimeRef.current = now;

      // Update proxy position
      proxy.y += e.deltaY;

      // Tandai bahwa user sedang scrolling
      proxy.isScrolling = true;

      // Clear timeout lama
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set timeout untuk detect scroll end
      scrollTimeout = setTimeout(() => {
        proxy.isScrolling = false;
      }, 150);
    };

    // Listen ke passive events juga (untuk momentum scrolling)
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Update pada setiap frame dengan easing untuk smooth motion
    const ticker = gsap.ticker.add(() => {
      const scrollHeight = html.scrollHeight - window.innerHeight;
      const maxY = scrollHeight;

      // Clamp proxy value
      proxy.y = clamp(proxy.y, 0, maxY);

      // Use power3.out easing untuk natural deceleration
      const currentScroll = window.scrollY;
      const diff = proxy.y - currentScroll;

      // Interpolation dengan adaptive easing
      const easing = proxy.isScrolling ? 0.08 : 0.12;
      const newScroll = currentScroll + diff * easing;

      if (Math.abs(diff) > 0.1) {
        window.scrollTo(0, newScroll);
      } else if (Math.abs(diff) > 0.01) {
        // Fine tune untuk exact position
        window.scrollTo(0, proxy.y);
      }
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      gsap.ticker.remove(ticker);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;

