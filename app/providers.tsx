'use client';

import { ReactNode } from 'react';
import { ProgressProvider } from './context/ProgressContext';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      {/* Remove Vercel Banner */}
      <script dangerouslySetInnerHTML={{ __html: `
        if (typeof window !== 'undefined') {
          window.__VERCEL_NO_BANNER__ = true;
          window.__VERCEL_INSIGHTS_ENABLED__ = false;
        }
      `}} />
      {children}
    </ProgressProvider>
  );
}
