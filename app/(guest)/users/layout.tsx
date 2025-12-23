import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Items | Space Playground Kit',
  description: 'Items management page.',
};

export default function ItemsLayout({ children }: LayoutProps<'/items'>) {
  return children;
}
