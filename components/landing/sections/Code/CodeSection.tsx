'use client';

import { CodeTabs } from '@/components/ReactBits/CodeTabs';
import { Button } from '@/components/ui/button';
import { INTEGRATIONS, CODES_CONNECTION_SETUP, CODES_DATABASE_SCHEMA, CODES_WEBSOCKET_INTEGRATION } from '@/lib/constants';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';
import { slideInFromTopVariants, slideInFromLeftVariants, slideInFromRightVariants, staggerItemVariants, staggerContainerVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const CodeSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
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
    <motion.section
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-24"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <motion.div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            variants={slideInFromTopVariants}
          >
            Code example
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-400"
            variants={slideInFromTopVariants}
          >
            Simple integration examples to connect your project with the Xenora Platform using modern programming languages.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4">
            {INTEGRATIONS.map((integration, index) => {
              const Icon = integration.icon;
              const isActive = selectedIntegration === integration.id;

              return (
                <motion.button
                  key={integration.id}
                  onClick={() => handleIntegrationChange(integration.id)}
                  className={`cursor-pointer w-full p-4 rounded-md transition-all duration-300 ${isActive
                      ? 'bg-[#120920] border border-violet-900 shadow-lg shadow-violet-900/35'
                      : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
                    }`}
                  variants={slideInFromLeftVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-start gap-4">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-neutral-700' : 'bg-neutral-800/50'
                      }`}>
                      <Icon size={20} className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-300'
                        }`} />
                    </div>
                    <div className="text-left">
                      <h3 className={`font-bold mb-1 text-xs sm:text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-white'
                        }`}>
                        {integration.title}
                      </h3>
                      <p className={`text-xs transition-colors duration-300 ${isActive ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            ref={codeTabsRef}
            style={{ opacity: 1 }}
            variants={slideInFromRightVariants}
          >
            <CodeTabs lang="typescript" codes={currentCodes} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CodeSection;
