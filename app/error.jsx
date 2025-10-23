'use client';

import { useEffect, useRef } from 'react';

export default function Error({ error, reset }) {
  const retryButtonRef = useRef(null);

  useEffect(() => {
    console.error('Route Error:', error);
    if (retryButtonRef.current) retryButtonRef.current.focus();
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200 text-center transition-all">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Something went wrong 😕
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          {error?.message || 'An unexpected issue occurred on this page.'}
        </p>
        <button
          ref={retryButtonRef}
          onClick={() => reset()}
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition">
          Try again
        </button>
      </div>
    </div>
  );
}
