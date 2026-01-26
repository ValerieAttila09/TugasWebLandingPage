import { Button } from '@/components/ui/button';
import { footerLinks } from '@/lib/constants';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
  return (
    <div className='container-wrapper py-24 border-t border-neutral-800 bg-neutral-950'>
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to build faster?
            </h2>
            <p className="text-lg text-neutral-400 mb-6">
              Start building with Xenora Platform today. Get everything you need to integrate real-time functionality into your applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className='bg-white text-black hover:bg-neutral-100 rounded-lg px-6 py-2 font-semibold'>
                Start Building
              </Button>
              <Button variant='outline' className='border-neutral-700 hover:bg-neutral-900 text-neutral-800 hover:text-white rounded-lg px-6 py-2'>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-sm">{category}</h3>
              <ul className='space-y-3'>
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-neutral-200 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-neutral-400 text-xs">
            <Link href='#' className='hover:text-neutral-200 transition-colors'>
              Privacy Policy
            </Link>
            <span className='text-neutral-700'>•</span>
            <Link href='#' className='hover:text-neutral-200 transition-colors'>
              Terms of Service
            </Link>
            <span className='text-neutral-700'>•</span>
            <Link href='#' className='hover:text-neutral-200 transition-colors'>
              Imprint
            </Link>
          </div>

          <p className="text-neutral-400 text-xs">
            &copy; 2026 <span className='text-white font-semibold'>Xenora</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-neutral-400 text-xs">Follow us:</span>
            <div className="flex gap-3">
              <Link
                href='#'
                className='p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-200 text-neutral-400 hover:text-white'
              >
                <Github size={18} />
              </Link>
              <Link
                href='#'
                className='p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-200 text-neutral-400 hover:text-white'
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;