import FloatingLines from '@/components/ReactBits/FloatingLines';
import { Button } from '@/components/ui/button';
import { HeroSectionContent } from '@/types/interfaces';
import CountUpSection from './CountUp';

const HeroSection = ({ headline, subHeadline, primaryCTA, secondaryCTA }: HeroSectionContent) => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className="absolute z-1 inset-0 w-full h-full">
        <div className='w-full h-full relative'>
          {/* <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          /> */}
        </div>
      </div>
      <div className="absolute inset-0 z-2 flex flex-col justify-center items-start gap-6 p-12">
        <div className="max-w-3xl flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl/14 text-white font-bold">{headline}</h1>
          <h3 className="text-md text-neutral-200 font-thin">{subHeadline}</h3>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant={'default'} className='rounded-full flex items-center justify-center p-px group bg-linear-to-tr from-violet-500 via-purple-600 to-violet-200'>
            <div className="w-full h-full rounded-full bg-neutral-950 px-5 py-2 flex items-center justify-center group-hover:bg-neutral-900 transition-all">
              <span className="text-white">
                {primaryCTA}
              </span>
            </div>
          </Button>
          <Button variant={'ghost'} className='rounded-full bg-neutral-950 border border-neutral-700 text-neutral-200 hover:bg-neutral-900 hover:text-neutral-300'>{secondaryCTA}</Button>
        </div>
      </div>
      <CountUpSection/>
    </div>
  );
}

export default HeroSection;