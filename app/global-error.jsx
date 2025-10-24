'use client';

import Button from '@/components/Button';
import { useEffect, useRef } from 'react';

export default function GlobalError({ error, reset }) {
  const reloadButtonRef = useRef(null);

  useEffect(() => {
    console.error('Global Error:', error);
    if (reloadButtonRef.current) reloadButtonRef.current.focus();
  }, [error]);

  return (
    <html>
      <body className="h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-dark-charcoal dark:bg-minion-yellow text-minion-yellow dark:text-dark-charcoal rounded-xl shadow-lg border border-dark-charcoal dark:border-minion-yellow/40 p-8 text-center transition-all duration-300">
          <h2 className="text-3xl font-semibold mb-3">⚠️ Application Error</h2>
          <p className="text-gray-300 mb-6">
            {error?.message ||
              'A critical error has occurred. Please reload the app.'}
          </p>
          <Button onClick={() => reset()} ref={retryButtonRef}>
            Reload App
          </Button>
        </div>
      </body>
    </html>
  );
}
