'use client';

import Link from 'next/link';

import {
  HouseIcon,
  PanelRightCloseIcon,
  PanelRightOpenIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  FileIcon,
  //GiftIcon,
  UserIcon,
} from '@/shared/components/icon';

//import { useGlobalNavigationContext } from '@/shared/context/global-navigation';
import { useGlobalMenuHooks } from './global-menu-hooks';

export function GlobalMenu() {
  const {
    isNavigationOpen,
    navigationWrapperWidthStyle,
    navigationDisplayStyle,
    onNavigationGroupSummaryClick,
    onNavigationOpenToggle,
  } = useGlobalMenuHooks();

  return (
    <div
      className={`relative min-h-screen bg-white border-r border-gray-200 ${navigationWrapperWidthStyle} z-20`}
    >
      <div className="flex items-center border-b border-gray-200 h-14 px-3">
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
              <PanelRightOpenIcon className="w-4 h-4 text-gray-500" />
            ) : (
              <PanelRightCloseIcon className="w-4 h-4 text-gray-500" />
            )}
          </button>
        </div>
      </div>
      <div className="p-3">
        <Link
          href="/"
          className="block text-gray-700 hover:bg-gray-100 rounded-sm"
        >
          <span className="flex items-center gap-x-1">
            <span className="w-8 h-8 rounded-md flex items-center justify-center">
              <HouseIcon className="w-4 h-4 text-gray-500" />
            </span>
            <span className={`block text-xs ${navigationDisplayStyle}`}>
              Home
            </span>
          </span>
        </Link>

        <details className="group">
          <summary
            className="hover:bg-gray-100 rounded-sm cursor-pointer list-none grid"
            onClick={onNavigationGroupSummaryClick}
          >
            <span className={`flex items-center gap-x-1`}>
              <span className="w-8 h-8 rounded-md flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-gray-500" />
              </span>

              <span className={`block text-xs ${navigationDisplayStyle}`}>
                Users
              </span>
              <span className={`ml-auto mr-1 block ${navigationDisplayStyle}`}>
                <ChevronDownIcon className="w-4 h-4 text-gray-500 group-open:hidden" />
                <ChevronUpIcon className="w-4 h-4 text-gray-500 hidden group-open:block" />
              </span>
            </span>
          </summary>
          <nav className={`${navigationDisplayStyle}`}>
            <ul>
              <li>
                <Link
                  href="/users"
                  className="block text-gray-700 hover:bg-gray-100 rounded-sm"
                >
                  <span className="flex items-center h-8 pl-9 text-xs">
                    List
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/users/1234567890"
                  className="block text-gray-700 hover:bg-gray-100 rounded-sm"
                >
                  <span className="flex items-center h-8 pl-9 text-xs">
                    Details
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/users/new"
                  className="block text-gray-700 hover:bg-gray-100 rounded-sm"
                >
                  <span className="flex items-center h-8 pl-9 text-xs">
                    Create
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/users/1234567890/edit"
                  className="block text-gray-700 hover:bg-gray-100 rounded-sm"
                >
                  <span className="flex items-center h-8 pl-9 text-xs">
                    Edit
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </details>

        <Link
          href="/blank"
          className="block text-gray-700 hover:bg-gray-100 rounded-sm"
        >
          <span className="flex items-center gap-x-1">
            <span className="w-8 h-8 rounded-md flex items-center justify-center">
              <FileIcon className="w-4 h-4 text-gray-500" />
            </span>
            <span className={`block text-xs ${navigationDisplayStyle}`}>
              Blank
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
