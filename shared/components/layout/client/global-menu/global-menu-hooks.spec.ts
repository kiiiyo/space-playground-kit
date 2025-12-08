import { renderHook } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useGlobalMenuHooks } from './global-menu-hooks';

// useGlobalNavigationContext をモック
vi.mock('@/shared/context/global-navigation', () => ({
  useGlobalNavigationContext: vi.fn(),
}));

import { useGlobalNavigationContext } from '@/shared/context/global-navigation';

const mockUseGlobalNavigationContext = vi.mocked(useGlobalNavigationContext);

describe('useGlobalMenuHooks', () => {
  const mockOnNavigationOpenToggle = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('isNavigationOpen が true の場合', () => {
    beforeEach(() => {
      mockUseGlobalNavigationContext.mockReturnValue({
        isNavigationOpen: true,
        onNavigationOpenToggle: mockOnNavigationOpenToggle,
      });
    });

    it('navigationWrapperWidthStyle が "w-[240px]" を返す', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.navigationWrapperWidthStyle).toBe('w-[240px]');
    });

    it('navigationDisplayStyle が "visible" を返す', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.navigationDisplayStyle).toBe('visible');
    });

    it('isNavigationOpen が true を返す', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.isNavigationOpen).toBe(true);
    });

    it('onNavigationGroupSummaryClick が呼ばれても onNavigationOpenToggle を呼ばない', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      result.current.onNavigationGroupSummaryClick();

      expect(mockOnNavigationOpenToggle).not.toHaveBeenCalled();
    });
  });

  describe('isNavigationOpen が false の場合', () => {
    beforeEach(() => {
      mockUseGlobalNavigationContext.mockReturnValue({
        isNavigationOpen: false,
        onNavigationOpenToggle: mockOnNavigationOpenToggle,
      });
    });

    it('navigationWrapperWidthStyle が "w-[56px]" を返す', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.navigationWrapperWidthStyle).toBe('w-[56px]');
    });

    it('navigationDisplayStyle が "hidden" を返す', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.navigationDisplayStyle).toBe('hidden');
    });

    it('isNavigationOpen が false を返す', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.isNavigationOpen).toBe(false);
    });

    it('onNavigationGroupSummaryClick が呼ばれると onNavigationOpenToggle を呼ぶ', () => {
      const { result } = renderHook(() => useGlobalMenuHooks());

      result.current.onNavigationGroupSummaryClick();

      expect(mockOnNavigationOpenToggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('onNavigationOpenToggle', () => {
    it('コンテキストの onNavigationOpenToggle を返す', () => {
      mockUseGlobalNavigationContext.mockReturnValue({
        isNavigationOpen: true,
        onNavigationOpenToggle: mockOnNavigationOpenToggle,
      });

      const { result } = renderHook(() => useGlobalMenuHooks());

      expect(result.current.onNavigationOpenToggle).toBe(
        mockOnNavigationOpenToggle,
      );
    });
  });
});
