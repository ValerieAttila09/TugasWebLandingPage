'use client';

import React, { useState, useEffect, useRef } from 'react';
import DocsSidebar from '@/components/docs/DocsSidebar';
import DocsHeader from '@/components/docs/DocsHeader';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close sidebar if click is outside of the sidebar and the header
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]); // Only re-run the effect if isSidebarOpen changes

  return (
    <div className="flex h-screen bg-black text-white">
      <div
        ref={sidebarRef}
        className={`fixed bottom-0 top-[60px] left-0 z-30 w-64 bg-neutral-950 border-r border-neutral-700 transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <DocsSidebar />
      </div>
      <div className="flex-1 flex flex-col lg:ml-64">
        <div ref={headerRef}>
          <DocsHeader onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        </div>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
