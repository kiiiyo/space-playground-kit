import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users | Space Playground Kit',
  description: 'Users management page.',
};

export default function UsersLayout({ children }: LayoutProps<'/users'>) {
  return children;
}
