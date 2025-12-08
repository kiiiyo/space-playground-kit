import type { Metadata } from 'next';
import { GuestLayoutWrapper } from '@/shared/components/layout/server/guest-layout-wrapper/guest-layout-wrapper';

export const metadata: Metadata = {
  title: 'Guest Area | Space Playground Kit',
  description: 'This is an guest area page.',
};

export default function GuestLayout(props: LayoutProps<'/'>) {
  return <GuestLayoutWrapper>{props.children}</GuestLayoutWrapper>;
}
