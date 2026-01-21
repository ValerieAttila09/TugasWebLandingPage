'use client';

import { landingPageNavMenu } from '@/lib/constants';
import Link from 'next/link';
import NavbarButton from './navbarButton/NavbarButton';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const currentPath = usePathname();

  return (
    <nav className='w-full flex items-center justify-between'>
      <div>
        {currentPath === "/" ? (
          <Link href={"/"} className="flex items-center cursor-pointer">
            <div className='size-10 mx-4 my-2 flex items-center justify-center rounded-lg bg-linear-to-br from-neutral-[#102302] via-black to-[#162804] border-[2px] border-[#274519]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#83Bd11]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
              </svg>
            </div>
            <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#83BD11] to-white text-2xl">NEXORA</span>
          </Link>
        ) : (
          <NavbarButton />
        )}
      </div>
      <div className='flex items-center gap-8'>
        {landingPageNavMenu.map((data) => {
          const isActivePath = currentPath == data.href
            ? { box: "bg-[#83Bd11]", text: "text-md text-[#83Bd11]" }
            : { box: null, text: "text-xs text-neutral-400" };
          return (
            <Link
              key={data.label}
              href={data.href}
              className='flex items-center gap-1 justify-center font-normal min-w-12 max-w-20 relative'
            >
              {isActivePath.box && (<div className={`w-[6px] h-1 ${isActivePath.box}`} />)}
              <p className={isActivePath.text}>{data.label}</p>
            </Link>
          );
        })}
      </div>
      <div className=''>
        <Link href={'/sign-in'} className='font-regular text-sm px-6'>
          <span className='text-white'>SIGN IN</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
