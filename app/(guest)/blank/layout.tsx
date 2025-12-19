import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blank Page | Space Playground Kit',
  description: 'This is an blank page.',
};

export default function BlankLayout({ children }: LayoutProps<'/blank'>) {
  return children;
}
