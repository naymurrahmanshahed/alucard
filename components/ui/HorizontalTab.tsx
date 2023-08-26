'use client';
import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
  shouldOpenTab: number;
  setShouldOpenTab: any;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
  shouldOpenTab,
  setShouldOpenTab,
}) => {
  const handleClick = useCallback(
    (index: number) => {
      setShouldOpenTab(index);

      onClick && onClick;
    },
    [setShouldOpenTab, onClick]
  );

  return (
    <div className='flex flex-col gap-10'>
      {/* tabs */}
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            className={cn(
              'eoq flex h-[4rem] w-[15rem] items-center justify-center whitespace-nowrap border border-grey px-6 py-3 text-center text-lg font-semibold uppercase tracking-widest',
              index == 0 && 'rounded-bl-2xl',
              index == tabs.length - 1 && 'rounded-tr-2xl',
              shouldOpenTab === index && 'border-dark bg-dark text-light'
            )}
            onClick={() => handleClick(index)}
            key={index}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* contents */}

      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? 'block' : 'hidden')}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;
