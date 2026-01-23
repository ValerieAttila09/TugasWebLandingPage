import SpotlightCard from '@/components/ReactBits/SpotlightCard';
import { Marquee } from '@/components/ui/marquee';
import { IntegrationLogo } from '@/lib/constants';
import Image from 'next/image';

const IntegrationsSection = () => {
  return (
    <div className="w-full py-20 space-y-8">
      <div className="space-y-4 mx-auto w-full max-w-3xl">
        <h1 className="text-center text-5xl text-white font-semibold">Integrate Your Favourite Apps</h1>
        <p className="text-center text-md text-neutral-300 font-thin">Enhance your workflow by connecting the tools you use daily. Our seamless integrations help you automate tasks and keep everything in sync.</p>
      </div>
      <div className='w-full max-w-6xl mx-auto relative overflow-hidden flex flex-col items-center justify-center'>
        <Marquee className="[--duration:40s]">
          {IntegrationLogo.map((data) => {
            return (
              <SpotlightCard
                key={data.name}
                className="custom-spotlight-card group hover:border-purple-950 h-32 w-62 flex flex-col gap-4 transition-all"
                spotlightColor="rgba(174, 0, 255, 0.2)"
              >
                <div className="w-auto flex items-center justify-start">
                  <h1 className="text-lg font-medium text-white">{data.name}</h1>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 z-1 " />
                  <Image src={data.icon} alt={data.name} width={100} height={100} className='absolute z-2 inset-0 h-auto w-8 saturate-0 opacity-100 brightness-100' />
                </div>
              </SpotlightCard>
            );
          })}
        </Marquee>
        <Marquee reverse className="[--duration:40s]">
          {IntegrationLogo.map((data, i) => {
            return (
              <SpotlightCard
                key={data.name}
                className="custom-spotlight-card group hover:border-purple-950 h-32 w-62 flex flex-col gap-4 transition-all"
                spotlightColor="rgba(174, 0, 255, 0.2)"
              >
                <div className="w-auto flex items-center justify-start">
                  <h1 className="text-lg font-medium text-white">{data.name}</h1>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 z-1 " />
                  <Image src={data.icon} alt={data.name} width={100} height={100} className='absolute z-2 inset-0 h-auto w-8 saturate-0 opacity-100 brightness-100' />
                </div>
              </SpotlightCard>
            );
          })}
        </Marquee>
        <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  );
}

export default IntegrationsSection;