import CountUp from '@/components/ReactBits/CountUp';
import { CountOnData } from '@/lib/constants';
import React from 'react'

const CountUpSection = () => {
  return (
    <div className="absolute z-5 bottom-0 right-0 h-25">
      <div className="w-2xl h-full flex justify-end items-end">
        <div style={{
          width: '100px',
          height: "100px",
          transform: "translateX(1px)",
          background: '#000',
          clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
        }} />
        <div className="w-full h-[calc(100%-0.5px)] bg-black flex items-center justify-center gap-10">
          {CountOnData.map((data) => {
            return (
              <div key={data.label} className="flex flex-col justify-center items-center gap-2">
                <div className="flex items-center justify-center">
                  <CountUp
                    from={0}
                    to={data.number}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-3xl font-medium text-white"
                  />
                  <h1 className="text-3xl text-neutral-100 font-medium">{data.symbol}</h1>
                </div>
                <span className="text-sm text-neutral-400">{data.label}</span>
              </div>
            );
          })}
        </div>
        {/* <div style={{
          width: '100px',
          height: "100px",
          transform: "translateX(-1px)",
          background: '#000',
          clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
        }} /> */}
      </div>
    </div>
  );
}

export default CountUpSection;