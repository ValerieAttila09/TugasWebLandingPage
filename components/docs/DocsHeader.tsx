
import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface DocsHeaderProps {
  onMenuClick: () => void;
}

const DocsHeader: React.FC<DocsHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-[60px] border-b border-neutral-800 inset-x-0 flex items-center p-4 bg-neutral-950/25 backdrop-blur-xs text-white lg:hidden">
      <button onClick={onMenuClick} className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
      <div className="flex items-center ml-4 text-sm">
        <span>Getting started</span>
        <ChevronRightIcon />
        <span className="font-semibold">Editor setup</span>
      </div>
    </header>
  );
};

export default DocsHeader;
