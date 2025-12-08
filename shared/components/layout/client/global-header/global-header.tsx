'use client';

import Link from 'next/link';

import type { CSSProperties } from 'react';
import { useGlobalNavigationContext } from '@/shared/context/global-navigation';
import { SettingsIcon, LogOutIcon } from '@/shared/components/icon';

export function GlobalHeader() {
  const { isNavigationOpen } = useGlobalNavigationContext();

  const headerLeftPaddingStyle = isNavigationOpen ? 'pl-[248px]' : 'pl-[64px]';

  return (
    <div className="absolute top-0 left-0 min-w-screen bg-white border-b border-gray-200 z-10">
      <div
        className={`${headerLeftPaddingStyle} flex items-center justify-end h-14 px-4`}
      >
        <button
          type="button"
          className="hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 border border-gray-200 rounded-md cursor-pointer "
          popoverTarget="popover-target"
          // FIXME: 型エラーが発生するので、CSSPropertiesを使用している
          style={{ anchorName: '--my-anchor' } as CSSProperties}
        >
          <SettingsIcon className="w-4 h-4 text-gray-500" />
        </button>
        <div
          id="popover-target"
          popover="auto"
          className="z-10 mt-0 w-56 bg-white rounded-md shadow-md border border-gray-200"
          style={
            {
              positionAnchor: '--my-anchor',
              top: 'anchor(bottom)',
              left: 'anchor(right)',
              translate: '-100% 4px',
              // FIXME: 型エラーが発生するので、CSSPropertiesを使用している
            } as CSSProperties
          }
        >
          <div className="divide-y divide-gray-200">
            <div className="p-2">
              <Link
                href="/"
                className="block text-gray-700 hover:bg-gray-100 rounded-sm"
              >
                <span className="block p-2 text-xs">Text Link</span>
              </Link>
              <Link
                href="/"
                className="block text-gray-700 hover:bg-gray-100 rounded-sm"
              >
                <span className="block p-2 text-xs">Text Link</span>
              </Link>
              <Link
                href="/"
                className="block text-gray-700 hover:bg-gray-100 rounded-sm"
              >
                <span className="block p-2 text-xs">Text Link</span>
              </Link>
            </div>
            <div className="p-2">
              <Link
                href="/"
                className="block text-gray-700 hover:bg-gray-100 rounded-sm"
              >
                <span className="flex items-center justify-start p-2 gap-x-2">
                  <SettingsIcon className="w-4 h-4 text-gray-500" />
                  <span className="block text-xs">Text Link</span>
                </span>
              </Link>
              <Link href="/" className="block text-gray-700 hover:bg-gray-100">
                <span className="flex items-center justify-start p-2 gap-x-2">
                  <SettingsIcon className="w-4 h-4 text-gray-500" />
                  <span className="block text-xs">Text Link</span>
                </span>
              </Link>
              <Link href="/" className="block text-gray-700 hover:bg-gray-100">
                <span className="flex items-center justify-start p-2 gap-x-2">
                  <SettingsIcon className="w-4 h-4 text-gray-500" />
                  <span className="block text-xs">Text Link</span>
                </span>
              </Link>
            </div>
            <div className="p-2">
              <button className="block w-full text-gray-700 hover:bg-gray-100 rounded-sm">
                <span className="flex items-center justify-start p-2 gap-x-2">
                  <LogOutIcon className="w-4 h-4 text-gray-500" />
                  <span className="block text-xs">Sign out</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
