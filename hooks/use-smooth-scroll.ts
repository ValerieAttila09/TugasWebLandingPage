import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const useSmoothScroll = () => {
  useEffect(() => {
    // Variable untuk tracking scroll state
    let proxy = { y: 0 },
      smooth = 0,
      clamp = gsap.utils.clamp(0, document.documentElement.scrollHeight - window.innerHeight);

    // ScrollTrigger refresh untuk update measurements
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      // Listen ke native scroll events
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchmove', onTouchMove, { passive: false });

      function onWheel(e: WheelEvent) {
        e.preventDefault();
        proxy.y += e.deltaY;
      }

      function onTouchMove(e: TouchEvent) {
        // Jangan prevent default untuk touch scroll
        // Biarkan native scroll behavior dan GSAP akan override-nya
      }

      // Animation loop menggunakan GSAP ticker
      const ticker = gsap.ticker.add(() => {
        let clampedY = clamp(proxy.y);
        smooth = gsap.utils.interpolate(smooth, clampedY, 0.1);

        if (Math.abs(smooth - window.scrollY) > 0.5) {
          window.scrollTo(0, smooth);
        }
      });

      // Cleanup
      return () => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('touchmove', onTouchMove);
        gsap.ticker.remove(ticker);
      };
    }
  }, []);
};

export default useSmoothScroll;
