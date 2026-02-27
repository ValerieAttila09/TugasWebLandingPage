import React from 'react';
import DocsTableOfContents from './DocsTableOfContents';
import { docsContent } from '@/lib/constants';

const DocsContent = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 sm:py-0">
      <div className="lg:col-span-3">
        <div className="prose prose-invert max-w-2xl mx-auto block">
          <p className="text-sm text-neutral-400">{docsContent.subtitle}</p>
          <h1 className="text-4xl font-bold mt-2">{docsContent.title}</h1>
          <p className="text-lg text-neutral-400">{docsContent.description}</p>

          {docsContent.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mt-12">{section.title}</h2><br />
              {section.paragraphs.map((paragraph, pIndex) => {
                return (
                  <p key={pIndex} className='text-sm font-normal text-neutral-300 mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} /> 
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <DocsTableOfContents />
      </div>
    </div>
  );
};

export default DocsContent;
