'use client';

import React from 'react';
import { motion } from 'motion/react';
import { slideInFromTopVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Check, X } from 'lucide-react';
import { ServicesData } from '@/lib/constants';

const ServicesComparison = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const pricingTiers = [
    { name: 'Starter', color: 'from-blue-500 to-cyan-500', popular: false },
    { name: 'Pro', color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', color: 'from-violet-500 to-purple-600', popular: false },
  ];

  const serviceAvailability: Record<string, Record<string, boolean>> = {
    'Starter': {
      'Real-time Database': true,
      'Authentication': true,
      'File Storage': false,
      'API Gateway': true,
      'Webhooks': false,
      'Analytics': false,
    },
    'Pro': {
      'Real-time Database': true,
      'Authentication': true,
      'File Storage': true,
      'API Gateway': true,
      'Webhooks': true,
      'Analytics': true,
    },
    'Enterprise': {
      'Real-time Database': true,
      'Authentication': true,
      'File Storage': true,
      'API Gateway': true,
      'Webhooks': true,
      'Analytics': true,
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full px-6 sm:px-8 md:px-12 py-12 md:py-24 bg-gradient-to-b from-neutral-950 to-black"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Service Availability by Plan
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto"
            variants={slideInFromTopVariants}
          >
            Choose the perfect plan for your needs. All plans include core infrastructure and support.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-x-auto"
          variants={staggerItemVariants}
        >
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left py-4 px-6 font-semibold text-white">
                  Service
                </th>
                {pricingTiers.map((tier) => (
                  <th key={tier.name} className="text-center py-4 px-6 font-semibold text-white relative">
                    <div>
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </span>
                        </div>
                      )}
                      {tier.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ServicesData.map((service, index) => (
                <motion.tr
                  key={service.id}
                  className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-white">{service.title}</span>
                    </div>
                  </td>

                  {pricingTiers.map((tier) => {
                    const isAvailable = serviceAvailability[tier.name]?.[service.title] ?? false;
                    const isPro = tier.name === 'Pro';

                    return (
                      <td key={`${service.id}-${tier.name}`} className="text-center py-4 px-6">
                        <motion.div
                          className={`flex justify-center ${isPro
                              ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 py-3 rounded-lg border border-purple-600/20'
                              : ''
                            }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {isAvailable ? (
                            <Check size={20} className="text-green-500" />
                          ) : (
                            <X size={20} className="text-neutral-600" />
                          )}
                        </motion.div>
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
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
          {[
            {
              tier: 'Starter',
              price: 'FREE',
              highlight: false,
              features: ['Perfect for MVPs', 'Limited storage', 'Community support', 'Standard performance']
            },
            {
              tier: 'Pro',
              price: '$29.9/month',
              highlight: true,
              features: ['All services included', 'Priority support', 'Custom domains', 'Advanced monitoring']
            },
            {
              tier: 'Enterprise',
              price: 'Custom',
              highlight: false,
              features: ['Unlimited resources', 'Dedicated support', 'SLA guaranteed', 'Custom integration']
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-lg border ${item.highlight
                  ? 'border-purple-600/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20'
                  : 'border-neutral-800 bg-neutral-950'
                } transition-all duration-300`}
              variants={staggerItemVariants}
              whileHover={{
                scale: item.highlight ? 1.05 : 1.02,
                borderColor: item.highlight ? 'rgba(168, 85, 247, 0.5)' : 'rgba(168, 85, 247, 0.3)',
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.tier}</h3>
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent mb-6">
                {item.price}
              </p>
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-300">
                    <Check size={16} className="text-violet-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesComparison;
