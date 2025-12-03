import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  GlobalNavigationProvider,
  useGlobalNavigationContext,
} from './global-navigation';

describe('GlobalNavigationContext', () => {
  describe('GlobalNavigationProvider', () => {
    it('初期状態で isNavigationOpen が false であること', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <GlobalNavigationProvider>{children}</GlobalNavigationProvider>
      );

      const { result } = renderHook(() => useGlobalNavigationContext(), {
        wrapper,
      });

      expect(result.current.isNavigationOpen).toBe(false);
    });

    it('onNavigationOpenToggle を呼び出すと isNavigationOpen が true に変わること', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <GlobalNavigationProvider>{children}</GlobalNavigationProvider>
      );

      const { result } = renderHook(() => useGlobalNavigationContext(), {
        wrapper,
      });

      expect(result.current.isNavigationOpen).toBe(false);

      act(() => {
        result.current.onNavigationOpenToggle();
      });

      expect(result.current.isNavigationOpen).toBe(true);
    });

    it('onNavigationOpenToggle を2回呼び出すと isNavigationOpen が false に戻ること', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <GlobalNavigationProvider>{children}</GlobalNavigationProvider>
      );

      const { result } = renderHook(() => useGlobalNavigationContext(), {
        wrapper,
      });

      expect(result.current.isNavigationOpen).toBe(false);

      act(() => {
        result.current.onNavigationOpenToggle();
      });

      expect(result.current.isNavigationOpen).toBe(true);

      act(() => {
        result.current.onNavigationOpenToggle();
      });

      expect(result.current.isNavigationOpen).toBe(false);
    });

    it('複数のコンポーネントで同じ状態を共有できること', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <GlobalNavigationProvider>{children}</GlobalNavigationProvider>
      );

      // 1つのrenderHook内で複数のフックを呼び出すカスタムフックを使用
      const useMultipleHooks = () => {
        const context1 = useGlobalNavigationContext();
        const context2 = useGlobalNavigationContext();
        return { context1, context2 };
      };

      const { result } = renderHook(() => useMultipleHooks(), {
        wrapper,
      });

      expect(result.current.context1.isNavigationOpen).toBe(false);
      expect(result.current.context2.isNavigationOpen).toBe(false);

      act(() => {
        result.current.context1.onNavigationOpenToggle();
      });

      expect(result.current.context1.isNavigationOpen).toBe(true);
      expect(result.current.context2.isNavigationOpen).toBe(true);
    });
  });

  describe('useGlobalNavigationContext', () => {
    it('Provider 外で使用した場合にエラーがスローされること', () => {
      // エラーをキャッチするため、console.error をモック
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      expect(() => {
        renderHook(() => useGlobalNavigationContext());
      }).toThrow(
        'useGlobalNavigationContext must be used within a GlobalNavigationProvider',
      );

      consoleErrorSpy.mockRestore();
    });
  });
});
