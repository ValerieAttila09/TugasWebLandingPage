'use client';

import React from 'react';
import { motion } from 'motion/react';
import { slideInFromLeftVariants, slideInFromRightVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { CheckCircle2, Shield, Zap, Users } from 'lucide-react';

const ServicesBenefits = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy globally with millisecond latency. Our distributed infrastructure ensures your services are always fast, no matter where your users are.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance. GDPR, HIPAA, SOC 2 certified. Your data is protected with industry-leading security standards.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our expert team is always ready to help. Get instant assistance with dedicated support channels and comprehensive documentation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle2,
      title: '99.9% Uptime SLA',
      description: 'Reliability you can count on. Automatic failover and redundancy ensure your services stay up and running 24/7/365.',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full px-6 sm:px-8 md:px-12 py-12 md:py-24"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
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
          <motion.div variants={slideInFromLeftVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-1 bg-white" />
              <h3 className="text-xs sm:text-xs md:text-sm font-semibold tracking-wider text-white/80">WHY CHOOSE US</h3>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Built for Modern Development
            </h2>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-400 flex items-center"
            variants={slideInFromRightVariants}
          >
            Our platform combines cutting-edge technology with developer-friendly tools, making it easy to build, deploy, and scale your applications with confidence.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 rounded-lg border border-neutral-800 bg-neutral-950 hover:border-violet-600/50 transition-all duration-300"
                variants={staggerItemVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(12, 8, 24, 0.8)',
                }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesBenefits;
