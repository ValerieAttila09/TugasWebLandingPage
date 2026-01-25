import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PricingSectionData } from '@/lib/constants';
import { InfoIcon } from 'lucide-react';
import React, { useState } from 'react';

const PricingSection = () => {

  const [pricingSelection, setPricingSelection] = useState({ category: "" });

  return (
    <div className='min-h-screen bg-linear-to-b from-black to-[#070609] border-y border-neutral-800 w-full p-6 sm:p-12 md:p-18 grid grid-cols-2 gap-6 sm:gap-16 md:gap-32'>
      <div className="col-span-1 space-y-52 pe-6">
        {PricingSectionData.pricingDescription.map((data) => {
          return (
            <div key={data.title} className="space-y-6">
              <span className="text-lg text-neutral-500 font-normal">{data.label}</span>
              <h1 className="text-2xl text-white font-medium">{data.title}</h1>
              <p className="text-md text-neutral-300 font-thin">{data.description}</p>
              {data.additionalContent && (
                <div className="rounded-md flex items-center gap-1 px-4 py-2 border border-neutral-700">
                  <InfoIcon className='text-neutral-400 w-3 h-3' />
                  <span className="text-sm font-thin text-neutral-300">
                    {data.additionalContent}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="col-span-1 space-y-4">
        {PricingSectionData.pricingOfferDetail.map((data) => {
          const isActiveSelection = data.title == pricingSelection.category;
          const setColor = isActiveSelection ? "border-violet-900 shadow-lg shadow-purple-950 bg-[#080510]" : "border-neutral-800 shadow-none bg-[#060407]";
          return (
            <div key={data.title} onClick={() => setPricingSelection({ category: data.title })} className={`relative cursor-pointer w-full rounded-lg border border-neutral-800 p-10 hover:border-violet-950 transition-all ${setColor}`}>
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <h1 className="text-2xl text-white font-semibold">{data.title}</h1>
                  <p className="text-md text-neutral-300 font-thin">{data.subtitle}</p>
                </div>
                <span className="flex items-center gap-0.5">
                  <span className="text-4xl text-white font-semibold">{data.price}</span>
                  <span className="text-md text-neutral-300 font-thin">{data.price == "FREE" ? "" : "/month"}</span>
                </span>
              </div>
              <Separator className='my-6 bg-neutral-700' />
              <div className="w-full grid grid-cols-2 gap-2">
                {data.guaranteedServices.map((guaranteedServicesData, i) => (
                  <span key={guaranteedServicesData} className="col-span-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span className="text-neutral-300 font-thin text-md">
                      {guaranteedServicesData}
                    </span>
                  </span>
                ))}
              </div>
              <Separator className='my-6 bg-neutral-700' />
              <div className="w-full grid grid-cols-2 gap-2">
                {data.benefits.map((benefitsData, i) => {
                  return (
                    <div key={benefitsData} className="col-span-1 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-md text-neutral-300 font-thin text-nowrap">{benefitsData}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10">
                <Button variant={'default'} className='w-full rounded-sm border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 hover:border-neutral-700'>Get Started</Button>
              </div>
              {isActiveSelection && (
                <div className="absolute -top-3 -right-3 size-8 rounded-full shadow-md shadow-green-950 border border-green-900 bg-neutral-950 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingSection;