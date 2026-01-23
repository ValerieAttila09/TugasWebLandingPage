import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowRight, Facebook, Github, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
  return (
    <div className='w-full px-18 pb-48 pt-18 border-t border-neutral-700 bg-neutral-950'>
      <div className="w-full grid grid-cols-16 gap-3 sm:gap-5 md:gap-10">
        <div className="col-span-4 flex flex-col justify-start items-start gap-3">
          <div className="size-8 bg-neutral-900 border border-neutral-800 rounded-sm"></div>
          <div className="flex items-center justify-center gap-2 my-3">
            {[
              { label: "Github", icon: Github },
              { label: "Facebook", icon: Facebook },
              { label: "Instagram", icon: Instagram },
              { label: "Twitter", icon: Twitter },
            ].map((data, i) => {
              const SocialMediaIcon = data.icon;
              return (
                <span className="p-1" key={data.label}>
                  <SocialMediaIcon className='size-5 text-white' />
                </span>
              );
            })}
          </div>
          <Button variant={'outline'} className='rounded-sm bg-neutral-950 border border-neutral-800 text-white'>Cookie Settings</Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'outline'} className='rounded-sm bg-neutral-950 border border-neutral-800 text-white'>Languages</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {Array.from({ length: 8 }).map((data, i) => {
                  return (
                    <DropdownMenuItem className='' key={i + 1}>Test Lang</DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="col-span-3 space-y-2">
          <h3 className="text-lg font-medium text-white">Testing</h3>
          <ul className='space-y-1'>
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <li key={i + 1} className="font-normal text-thin text-neutral-300">Testing Menu</li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-3 space-y-2">
          <h3 className="text-lg font-medium text-white">Testing</h3>
          <ul className='space-y-1'>
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <li key={i + 1} className="font-normal text-thin text-neutral-300">Testing Menu</li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-3 space-y-2">
          <h3 className="text-lg font-medium text-white">Testing</h3>
          <ul className='space-y-1'>
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <li key={i + 1} className="font-normal text-thin text-neutral-300">Testing Menu</li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-3 space-y-2">
          <h3 className="text-lg font-medium text-white">Testing</h3>
          <ul className='space-y-1'>
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <li key={i + 1} className="font-normal text-thin text-neutral-300">Testing Menu</li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-15 flex items-center justify-between py-4 mt-8">
          <span className="text-md text-white font-normal">&copy; 2026 www.nexora.com</span>
          <Link href={"/"} className='flex items-center gap-2 px-3 py-2'>
            <span className="text-white font-normal text-md">Explore more</span>
            <ArrowRight className='text-white size-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;