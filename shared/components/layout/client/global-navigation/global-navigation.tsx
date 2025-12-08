'use client';

import { GlobalNavigationProvider } from '@/shared/context/global-navigation';

import { GlobalHeader } from '@/shared/components/layout/client/global-header';
import { GlobalMenu } from '@/shared/components/layout/client/global-menu';

export function GlobalNavigation() {
  return (
    <div className="relative">
      <GlobalNavigationProvider>
        <GlobalMenu />
        <GlobalHeader />
      </GlobalNavigationProvider>
    </div>
  );
}
