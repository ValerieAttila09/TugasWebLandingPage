
import React from 'react';
import DocsTableOfContents from './DocsTableOfContents';
import Image from 'next/image';

const DocsContent = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 sm:py-0">
      <div className="lg:col-span-3">
        <div className="prose prose-invert max-w-2xl mx-auto block">
          <p className="text-sm text-neutral-400">GETTING STARTED</p>
          <h1 className="text-4xl font-bold mt-2">Editor setup</h1>
          <p className="text-lg text-neutral-400">Tooling to improve the developer experience when working with Tailwind CSS.</p>
          
          <h2 className="text-2xl font-semibold mt-12">Syntax support</h2><br />
          <p className='text-sm font-normal text-neutral-300'>Tailwind CSS uses custom CSS syntax like <code className="text-fuchsia-400">@theme</code>, <code className="text-fuchsia-400">@variant</code>, and <code className="text-fuchsia-400">@source</code>, and in some editors this can trigger warnings or errors where these rules aren’t recognized.</p><br />
          <p className='text-sm font-normal text-neutral-300'>If you’re using VS Code, our official <a href="#" className="text-fuchsia-400">Tailwind CSS IntelliSense</a> plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses.</p><br />
          <p className='text-sm font-normal text-neutral-300'>In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.</p><br />

          <h2 className="text-2xl font-semibold mt-12 mb-2">Cursor</h2>
          <p className='text-sm font-normal text-neutral-300'><a href="#" className="text-fuchsia-400">Cursor</a> is an AI-native code editor with features like context-aware autocomplete and built-in coding agents. Since it supports VS Code extensions, all of the Tailwind CSS tooling you’re already familiar with works out of the box – including our official <a href="#" className="text-fuchsia-400">Tailwind CSS IntelliSense</a> and the <a href="#" className="text-fuchsia-400">Prettier plugin</a> for class sorting.</p>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <DocsTableOfContents />
      </div>
    </div>
  );
};

export default DocsContent;
