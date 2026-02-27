import React from 'react';
import { docsTableOfContentsItems, docsTableOfContentsCard } from '@/lib/constants';

const DocsTableOfContents = () => {
  return (
    <div className="sticky z-5 top-0">
      <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">On this page</h3>
      <ul>
        {docsTableOfContentsItems.map((item, index) => (
          <li key={index} className="mb-2">
            <a href="#" className={`block text-sm ${item.active ? 'text-fuchsia-400 font-semibold' : 'text-neutral-400 hover:text-white'}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-4 bg-neutral-900 border border-neutral-700 rounded-lg text-sm">
        <p className="font-semibold">{docsTableOfContentsCard.title}</p>
        <p className="mt-2 text-neutral-400">{docsTableOfContentsCard.description}</p>
        <p className="mt-4 text-xs italic text-neutral-500" dangerouslySetInnerHTML={{ __html: docsTableOfContentsCard.quote }} />
        <p className="text-xs text-neutral-500">{docsTableOfContentsCard.author}</p>
      </div>
    </div>
  );
};

export default DocsTableOfContents;
