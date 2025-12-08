'use client';

import {
  PanelRightCloseIcon,
  PanelRightOpenIcon,
} from '@/shared/components/icon';

import { useGlobalNavigationContext } from '@/shared/context/global-navigation';

export function GlobalMenu() {
  const { isNavigationOpen, onNavigationOpenToggle } =
    useGlobalNavigationContext();

  const navigationWrapperWidthStyle = isNavigationOpen
    ? 'w-[240px]'
    : 'w-[56px]';

  const navigationDisplayStyle = isNavigationOpen ? 'visible' : 'hidden';

  return (
    <div
      className={`relative min-h-screen bg-white border-r border-gray-200 ${navigationWrapperWidthStyle} z-20`}
    >
      <div className="flex items-center border-b border-gray-200 h-14 pl-2 pr-3">
        <span className={`text-base font-bold ${navigationDisplayStyle}`}>
          Space Playground Kit
        </span>
        <div className="ml-auto">
          <button
            type="button"
            className="hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 border border-gray-200 rounded-md cursor-pointer"
            onClick={onNavigationOpenToggle}
          >
            {isNavigationOpen ? (
              <PanelRightOpenIcon className="w-4 h-4 text-gray-800" />
            ) : (
              <PanelRightCloseIcon className="w-4 h-4 text-gray-800" />
            )}
          </button>
        </div>
      </div>
      <div> Global Menu</div>
    </div>
  );
}
