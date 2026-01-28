'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { JetBrains_Mono } from 'next/font/google';
import { LOG_MESSAGES } from '@/lib/constants';
import { AnimatedGridPattern } from '@/components/ReactBits/AnimatedGridPattern';
import { cn } from '@/lib/utils';

const jetBrainsFont = JetBrains_Mono({
  weight: ['400']
});

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const logRef = useRef<HTMLSpanElement>(null);
  const loadingScreenRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: 100,
      duration: 6,
      ease: 'none',
      onUpdate: () => {
        const current = Math.floor(obj.value);
        setProgress(current);

        if (barRef.current) {
          gsap.to(barRef.current, {
            width: `${current}%`,
            duration: 0.2,
            ease: 'power1.out'
          });
        }

        if (percentRef.current) {
          percentRef.current.textContent = `${current}%`;
        }

        if (logRef.current) {
          const index = Math.min(
            LOG_MESSAGES.length - 1,
            Math.floor((current / 100) * LOG_MESSAGES.length)
          );
          logRef.current.textContent = LOG_MESSAGES[index];
        }
      },
      onComplete: () => {
        gsap.to(loadingScreenRef.current, {
          opacity: 0,
          delay: 1,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            if (!loadingScreenRef.current) return;
            loadingScreenRef.current.style.display = 'none';
            onComplete?.();
          }
        });
      }
    });
  }, [onComplete]);

  return (
    <div ref={loadingScreenRef} className='fixed z-[500] inset-0 bg-black'>
      <div className="relative w-full h-full">
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={0.5}
          className={cn(
            "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div
          className="fixed inset-0 z-[9999] flex flex-col justify-center px-8 sm:px-[10%] text-xs text-neutral-800"
        >
          {/* Top loading line */}
          <div className="relative mb-2 h-0.5 rounded-full w-full bg-neutral-800">
            <div
              ref={barRef}
              className="absolute left-0 top-0 h-0.5 rounded-full w-0 bg-violet-700"
            />
          </div>

          <div className={`${jetBrainsFont.className} flex justify-between`}>
            <span className='text-white font-thin text-sm' ref={logRef}>Initializing...</span>
            <span className='text-white font-thin text-sm' ref={percentRef}>0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}