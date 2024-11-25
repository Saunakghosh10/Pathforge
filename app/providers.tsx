'use client';

import { ReactNode } from 'react';
import { ProgressProvider } from './context/ProgressContext';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      {children}
    </ProgressProvider>
  );
}
