import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onboarding | Space Playground Kit',
  description: 'This is an onboarding page.',
};

export default function OnboardingLayout({
  children,
}: LayoutProps<'/onboarding'>) {
  return children;
}
