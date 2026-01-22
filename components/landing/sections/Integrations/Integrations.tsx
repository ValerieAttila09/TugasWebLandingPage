import SpotlightCard from '@/components/ReactBits/SpotlightCard';
import TiltedCard from '@/components/ReactBits/TiltedCard';
import { IntegrationLogo } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

const IntegrationsSection = () => {
  return (
    <div className='w-full py-16 max-w-6xl mx-auto grid grid-cols-6 gap-6'>
      {IntegrationLogo.map((data, i) => {
        return (
          <SpotlightCard 
          key={data.name}
           className="custom-spotlight-card group h-80 nth-1:col-span-3 nth-2:col-span-3 col-span-2 flex flex-col transition-all" 
           spotlightColor="rgba(174, 0, 255, 0.2)"
           >
            <div className="w-auto flex items-center justify-start">
              <h1 className="text-2xl font-medium text-white">{data.name}</h1>
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 z-1 " />
              <Image src={data.icon} alt={data.name} width={400} height={400} className='absolute z-2 inset-0 group-first:w-26 h-auto w-16 saturate-0 opacity-100 brightness-200'/>
            </div>
          </SpotlightCard>
        );
      })}
    </div>
  );
}

export default IntegrationsSection;