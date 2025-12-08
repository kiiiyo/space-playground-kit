import { GlobalNavigation } from '@/shared/components/layout/client/global-navigation';

export async function GuestLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-row">
      <div className="flex-basis">
        <GlobalNavigation />
      </div>
      <div className="grow pt-14">{children}</div>
    </div>
  );
}
