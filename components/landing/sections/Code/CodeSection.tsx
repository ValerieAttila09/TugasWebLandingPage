'use client';

import { CodeTabs } from '@/components/ReactBits/CodeTabs';
import { Button } from '@/components/ui/button';
import { INTEGRATIONS, CODES_CONNECTION_SETUP, CODES_DATABASE_SCHEMA, CODES_WEBSOCKET_INTEGRATION } from '@/lib/constants';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CodeSection = () => {
  const [selectedIntegration, setSelectedIntegration] = React.useState('connection-setup');
  const codeTabsRef = useRef<HTMLDivElement>(null);

  const integrationCodes = {
    'connection-setup': CODES_CONNECTION_SETUP,
    'database-schema': CODES_DATABASE_SCHEMA,
    'websocket-integration': CODES_WEBSOCKET_INTEGRATION,
  };

  const handleIntegrationChange = (integrationId: string) => {
    if (selectedIntegration === integrationId) return;

    gsap.to(codeTabsRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setSelectedIntegration(integrationId);
      }
    });
  };

  useEffect(() => {
    gsap.to(codeTabsRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [selectedIntegration]);

  const currentCodes = integrationCodes[selectedIntegration as keyof typeof integrationCodes] || CODES_CONNECTION_SETUP;

  return (
    <section className="w-full py-24 px-6 sm:px-12 md:px-18">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Code example
          </h2>
          <p className="text-lg text-neutral-400">
            Simple integration examples to connect your project with the Xenora Platform using modern programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {INTEGRATIONS.map((integration) => {
              const Icon = integration.icon;
              const isActive = selectedIntegration === integration.id;

              return (
                <button
                  key={integration.id}
                  onClick={() => handleIntegrationChange(integration.id)}
                  className={`cursor-pointer w-full p-4 rounded-md transition-all duration-300 ${isActive
                      ? 'bg-[#120920] border border-violet-900 shadow-lg shadow-violet-900/35'
                      : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
                    }`}
                >
                  <div className="flex items-start justify-start gap-4">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-neutral-700' : 'bg-neutral-800/50'
                      }`}>
                      <Icon size={20} className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-300'
                        }`} />
                    </div>
                    <div className="text-left">
                      <h3 className={`font-semibold mb-1 text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-white'
                        }`}>
                        {integration.title}
                      </h3>
                      <p className={`text-xs transition-colors duration-300 ${isActive ? 'text-neutral-300' : 'text-neutral-400'
                        }`}>
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-2" ref={codeTabsRef} style={{ opacity: 1 }}>
            <CodeTabs lang="typescript" codes={currentCodes} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
