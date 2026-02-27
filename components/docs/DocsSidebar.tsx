import React from 'react';
import { docsSidebarMenuItems, docsGettingStartedItems, docsCoreConceptsItems } from '@/lib/constants';

const DocsSidebar = () => {
  return (
    <div className="p-4 text-sm text-neutral-400 h-full overflow-y-auto">
      <nav>
        <ul>
          {docsSidebarMenuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="flex items-center py-2 px-3 rounded-sm hover:bg-neutral-800 hover:text-white transition-colors duration-200">
                <item.icon/>
                <span className="ml-3">{item.name}</span>
                {item.new && <span className="ml-auto text-xs bg-[#16091f] text-purple-400 border border-purple-700 rounded-full px-2 py-0.5">NEW</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Getting Started</h3>
          <ul>
            {docsGettingStartedItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className={`py-2 px-3 block rounded-sm hover:text-white ${item === 'Your First Project' ? 'text-white bg-neutral-800 border border-neutral-600' : ''}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Core Concepts</h3>
          <ul>
            {docsCoreConceptsItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="py-2 px-3 block rounded-sm hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DocsSidebar;
