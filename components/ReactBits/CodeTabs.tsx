'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown } from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  type TabsProps,
} from './animate/tabs';
import { CopyButton } from './animate/copy';
import gsap from 'gsap';

const jetBrainsFont = JetBrains_Mono({
  weight: ['400']
});

type CodeTabsProps = {
  codes: Record<string, { code: string; description?: string }>;
  lang?: string;
  copyButton?: boolean;
  onCopiedChange?: (copied: boolean, content?: string) => void;
} & Omit<TabsProps, 'children'>;

function CodeTabs({
  codes,
  lang = 'typescript',
  className,
  defaultValue,
  value,
  onValueChange,
  copyButton = true,
  onCopiedChange,
  ...props
}: CodeTabsProps) {
  const { setTheme } = useTheme();

  // Set dark theme on mount
  React.useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  const [highlightedCodes, setHighlightedCodes] = React.useState<Record<
    string,
    { html: string; description?: string }
  > | null>(null);
  const [selectedCode, setSelectedCode] = React.useState<string>(
    value ?? defaultValue ?? Object.keys(codes)[0] ?? '',
  );
  const [isExpanded, setIsExpanded] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const { codeToHtml } = await import('shiki');
        const newHighlightedCodes: Record<string, { html: string; description?: string }> = {};

        for (const [command, item] of Object.entries(codes)) {
          const codeStr = typeof item === 'string' ? item : item.code;
          const description = typeof item === 'string' ? undefined : item.description;

          const highlighted = await codeToHtml(codeStr, {
            lang,
            theme: 'github-dark',
          });

          newHighlightedCodes[command] = {
            html: highlighted,
            description
          };
        }

        setHighlightedCodes(newHighlightedCodes);
      } catch (error) {
        console.error('Error highlighting codes', error);
      }
    }
    loadHighlightedCode();
  }, [lang, codes]);

  React.useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        gsap.to(contentRef.current, {
          maxHeight: 'none',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(contentRef.current, {
          maxHeight: '300px',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.in',
        });
      }
    }
  }, [isExpanded]);

  const codeObj = codes[selectedCode];
  const actualCode = typeof codeObj === 'string' ? codeObj : codeObj.code;
  const description = typeof codeObj === 'string' ? undefined : codeObj.description;

  return (
    <div className="w-full">
      <Tabs
        data-slot="install-tabs"
        className={cn(
          'w-full gap-0 bg-muted/50 rounded-xl border overflow-hidden border-neutral-800 bg-neutral-950',
          className,
        )}
        {...props}
        value={selectedCode}
        onValueChange={(val) => {
          setSelectedCode(val);
          onValueChange?.(val);
        }}
      >
        <TabsHighlight className="absolute z-0 inset-0 rounded-none shadow-none bg-transparent after:content-[''] after:absolute after:inset-x-0 after:h-0.5 after:bottom-0 after:bg-white after:rounded-t-full">
          <TabsList
            data-slot="install-tabs-list"
            className="w-full relative flex items-center justify-between rounded-none h-12 bg-neutral-900 border-b border-neutral-800 text-current py-0 px-4"
          >
            <div className="flex gap-x-3 h-full">
              {highlightedCodes &&
                Object.keys(highlightedCodes).map((code) => (
                  <TabsHighlightItem
                    key={code}
                    value={code}
                    className="flex items-center justify-center"
                  >
                    <TabsTrigger
                      key={code}
                      value={code}
                      className={`text-neutral-400 h-full text-sm font-medium data-[state=active]:text-white px-0`}
                    >
                      {code}
                    </TabsTrigger>
                  </TabsHighlightItem>
                ))}
            </div>

            <div className="flex items-center gap-2">
              {copyButton && highlightedCodes && (
                <CopyButton
                  content={actualCode}
                  size="xs"
                  variant={'default'}
                  className="-me-2.5 bg-transparent hover:bg-white/10"
                  onCopyChange={onCopiedChange}
                />
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors ml-2"
                title={isExpanded ? 'Collapse' : 'Expand'}
              >
                <ChevronDown
                  size={16}
                  className={cn(
                    'text-neutral-400 transition-transform duration-300',
                    isExpanded && 'rotate-180'
                  )}
                />
              </button>
            </div>
          </TabsList>
        </TabsHighlight>

        <TabsContents data-slot="install-tabs-contents">
          {highlightedCodes &&
            Object.entries(highlightedCodes).map(([code, { html, description }]) => (
              <TabsContent
                data-slot="install-tabs-content"
                key={code}
                className={`w-full`}
                value={code}
              >
                {description && (
                  <div className="px-4 pt-4 pb-2 text-sm text-neutral-400 border-b border-neutral-800">
                    {description}
                  </div>
                )}

                <div
                  ref={contentRef}
                  className={`${jetBrainsFont.className} overflow-hidden`}
                  style={{ maxHeight: isExpanded ? 'none' : '300px', opacity: 1 }}
                >
                  <div
                    className={`${jetBrainsFont.className} w-full text-sm overflow-auto p-4 [&>pre]:bg-transparent! [&_code_.line]:px-0! [&>pre]:[background:transparent_!important] [&>pre]:border-none [&_code]:text-[14px]! [&_code_.line-number]:text-neutral-600 [&_code_.line-number]:mr-4 [&>pre]:font-mono! [&_code]:font-mono!`}
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                    }}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>

                {!isExpanded && (
                  <div className="px-4 py-3 border-t border-neutral-800 text-center">
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      Show more lines...
                    </button>
                  </div>
                )}
              </TabsContent>
            ))}
        </TabsContents>
      </Tabs>
    </div>
  );
}

export { CodeTabs, type CodeTabsProps };
