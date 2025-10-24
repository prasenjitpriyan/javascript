'use client';

import Button from '@/components/Button';
import { useEffect, useRef } from 'react';

export default function Error({ error, reset }) {
  const retryButtonRef = useRef(null);

  useEffect(() => {
    console.error('Route Error:', error);
    if (retryButtonRef.current) retryButtonRef.current.focus();
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-dark-charcoal dark:bg-minion-yellow text-minion-yellow dark:text-dark-charcoal rounded-xl shadow-lg border border-dark-charcoal dark:border-minion-yellow/40 p-8 text-center transition-all duration-300">
        <h2 className="text-3xl font-bold mb-3 tracking-tight">
          Something went wrong!
        </h2>
        <p className="text-sm text-minion-yellow/90 dark:text-dark-charcoal/80 mb-6">
          {error?.message || 'An unexpected issue occurred on this page.'}
        </p>
        <Button onClick={() => reset()} ref={retryButtonRef}>
          Try again
        </Button>
      </div>
    </div>
  );
}
