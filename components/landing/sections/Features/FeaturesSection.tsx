'use client';

import React from 'react';
import { FeaturesSectionData } from '@/lib/constants';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const FeaturesSection = () => {
  // Extract unique keywords from descriptions for sub-items
  const featureKeywords = [
    { main: 'Backend as a Service', items: ['Deploy APIs', 'Authentication', 'Data Management', 'Zero Overhead'] },
    { main: 'Real-time Database', items: ['Data Sync', 'Collaborative Apps', 'Live Dashboards', 'Responsive UX'] },
    { main: 'Orchestration & Automation', items: ['Workflows', 'Task Scheduling', 'Service Integration', 'Orchestration Tools'] },
    { main: 'Developer-Friendly APIs', items: ['REST APIs', 'WebSocket APIs', 'Multiple SDKs', 'Code Examples'] },
  ];

  return (
    <div className='w-full px-6 sm:px-12 md:px-18 py-24 md:py-32'>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="mb-6">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">
            SERVICES WE PROVIDE
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our comprehensive approach to delivering exceptional results through powerful platform capabilities
          </h2>
        </div>

        <Link href="#contact" className="inline-flex items-center gap-2 text-neutral-400 hover:text-violet-500 transition-colors group">
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Get in touch</span>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Main Features */}
          <div className="flex flex-col justify-between space-y-6 sm:space-y-8 md:space-y-10">
            {FeaturesSectionData.map((feature, index) => (
              <div key={index} className="group">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Feature Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureKeywords.map((feature, rowIndex) => (
              <div key={rowIndex} className="space-y-3 p-6 rounded-xl border border-neutral-800 hover:border-violet-900 bg-neutral-900/50 hover:bg-violet-950/20 transition-all duration-300">
                <h4 className="text-sm font-semibold text-white mb-4">{feature.main}</h4>
                <div className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-neutral-950 border border-green-900 flex items-center justify-center shrink-0 mt-1">
                        <Check size={10} className="text-green-700" strokeWidth={3} />
                      </div>
                      <span className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;