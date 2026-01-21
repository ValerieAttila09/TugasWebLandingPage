
import Sidebar from '@/components/landing/sidebar/Sidebar';
import Window from '@/components/landing/window/Window';
import React from 'react';

const Page = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Sidebar/>
      <Window/>
    </div>
  );
}

export default Page;