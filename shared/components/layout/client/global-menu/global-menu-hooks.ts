import { useCallback } from 'react';
import { useGlobalNavigationContext } from '@/shared/context/global-navigation';

export const useGlobalMenuHooks = () => {
  const { isNavigationOpen, onNavigationOpenToggle } =
    useGlobalNavigationContext();

  const navigationWrapperWidthStyle = isNavigationOpen
    ? 'w-[240px]'
    : 'w-[56px]';

  const navigationDisplayStyle = isNavigationOpen ? 'visible' : 'hidden';

  const onNavigationGroupSummaryClick = useCallback(() => {
    if (!isNavigationOpen) {
      onNavigationOpenToggle();
    }
  }, [isNavigationOpen, onNavigationOpenToggle]);
  return {
    isNavigationOpen,
    navigationDisplayStyle,
    navigationWrapperWidthStyle,
    onNavigationGroupSummaryClick,
    onNavigationOpenToggle,
  };
};
