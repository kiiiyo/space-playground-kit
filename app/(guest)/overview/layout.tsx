import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overview | Space Playground Kit',
  description: 'This is an overview page.',
};

export default function OnboardingLayout({
  children,
}: LayoutProps<'/overview'>) {
  return children;
}
