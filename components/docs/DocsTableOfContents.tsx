
import React from 'react';

const DocsTableOfContents = () => {
  const tocItems = [
    { title: 'Syntax support', active: true },
    { title: 'Cursor', active: false },
    { title: 'Zed', active: false },
    { title: 'IntelliSense for VS Code', active: false },
    { title: 'Class sorting with Prettier', active: false },
    { title: 'JetBrains IDEs', active: false },
  ];

  return (
    <div className="sticky z-5 top-0">
      <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">On this page</h3>
      <ul>
        {tocItems.map((item, index) => (
          <li key={index} className="mb-2">
            <a href="#" className={`block text-sm ${item.active ? 'text-fuchsia-400 font-semibold' : 'text-neutral-400 hover:text-white'}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-4 bg-neutral-800 rounded-lg text-sm">
        <p className="font-semibold">From the creators of Tailwind CSS</p>
        <p className="mt-2 text-neutral-400">Make your ideas look awesome, without relying on a designer.</p>
        <p className="mt-4 text-xs italic text-neutral-500">&quot;This is the survival kit I wish I had when I started building apps.&quot;</p>
        <p className="text-xs text-neutral-500">- Derrick Reimer, SavvyCal</p>
      </div>
    </div>
  );
};

export default DocsTableOfContents;
