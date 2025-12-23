import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Items | Space Playground Kit',
  description: 'Items management page.',
};

export default function UsersLayout({ children }: LayoutProps<'/users'>) {
  return children;
}
