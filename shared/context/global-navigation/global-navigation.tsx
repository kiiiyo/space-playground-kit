import { createContext, FC, useCallback, useContext, useState } from 'react';

export type GlobalNavigationContextValue = {
  isNavigationOpen: boolean;
  onNavigationOpenToggle: () => void;
};

export const GlobalNavigationContext = createContext<
  GlobalNavigationContextValue | undefined
>(undefined);

export const useGlobalNavigationContext = (): GlobalNavigationContextValue => {
  const context = useContext(GlobalNavigationContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalNavigationContext must be used within a GlobalNavigationProvider',
    );
  }
  return context;
};

export const GlobalNavigationProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const onNavigationOpenToggle = useCallback(() => {
    setIsNavigationOpen((prev) => !prev);
  }, []);

  return (
    <GlobalNavigationContext.Provider
      value={{ isNavigationOpen, onNavigationOpenToggle }}
    >
      {children}
    </GlobalNavigationContext.Provider>
  );
};

export const GlobalNavigationContextConsumer = GlobalNavigationContext.Consumer;

export default GlobalNavigationContext;
