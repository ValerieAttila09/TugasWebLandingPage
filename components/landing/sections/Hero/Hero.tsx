import CountUp from '@/components/ReactBits/CountUp';
import FloatingLines from '@/components/ReactBits/FloatingLines';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CountOnData } from '@/lib/constants';
import { HeroSectionContent } from '@/types/interfaces';
import React from 'react';

const HeroSection = ({ headline, subHeadline, primaryCTA, secondaryCTA }: HeroSectionContent) => {
  return (
    <div className='relative w-full h-[92vh] overflow-hidden'>
      <div className="absolute z-1 inset-0 w-full h-full">
        <div className='w-full h-full relative'>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-2 flex flex-col justify-center items-center gap-6">
        <div className="rounded-full flex items-center justify-center p-px group bg-linear-to-tr from-violet-500 via-purple-600 to-violet-200">
          <div className="w-full h-full rounded-full bg-neutral-900 px-3 py-1 flex items-center justify-center gap-2 group-hover:bg-neutral-900 transition-all">
            <div className="size-1 bg-violet-500" />
            <span className="text-xs font-medium text-violet-500">POWERED BY AI</span>
            <div className="size-1 bg-violet-500" />
          </div>
        </div>
        <div className="max-w-3xl flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-[56px]/14 text-white font-bold">{headline}</h1>
          <h3 className="text-center text-md text-neutral-300 font-normal">{subHeadline}</h3>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant={'default'} className='rounded-md flex items-center justify-center p-px group bg-linear-to-tr from-violet-500 via-purple-600 to-violet-200'>
            <div className="w-full h-full rounded-md bg-neutral-950 px-5 py-2 flex items-center justify-center group-hover:bg-neutral-900 transition-all">
              <span className="text-white">
                {primaryCTA}
              </span>
            </div>
          </Button>
          <Button variant={'ghost'} className='rounded-md bg-neutral-950 border border-neutral-700 text-neutral-200 hover:bg-neutral-900 hover:text-neutral-300'>{secondaryCTA}</Button>
        </div>
      </div>
      <div className="absolute z-5 bottom-0 inset-x-0 h-28">
        <div className="mx-auto w-3xl h-full flex justify-end">
          <div style={{
            width: '112px',
            height: "112px",
            transform: "translateX(1px)",
            background: '#000',
            clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
          }} />
          <div className="w-full h-full bg-black flex items-center justify-center gap-10">
            {CountOnData.map((data, i) => {
              return (
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center justify-center">
                    <CountUp
                      from={0}
                      to={data.number}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-5xl font-medium text-white"
                    />
                    <h1 className="text-5xl text-neutral-100 font-medium">{data.symbol}</h1>
                  </div>
                  <span className="text-md text-neutral-400">{data.label}</span>
                </div>
              );
            })}
          </div>
          <div style={{
            width: '112px',
            height: "112px",
            transform: "translateX(-1px)",
            background: '#000',
            clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
          }} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;