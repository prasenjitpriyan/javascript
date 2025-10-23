'use client';

import { useEffect, useRef } from 'react';

export default function GlobalError({ error, reset }) {
  const reloadButtonRef = useRef(null);

  useEffect(() => {
    console.error('Global Error:', error);
    if (reloadButtonRef.current) reloadButtonRef.current.focus();
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full text-center border border-gray-700 transition-all">
          <h2 className="text-3xl font-semibold mb-3">⚠️ Application Error</h2>
          <p className="text-gray-300 mb-6">
            {error?.message ||
              'A critical error has occurred. Please reload the app.'}
          </p>
          <button
            ref={reloadButtonRef}
            onClick={() => reset()}
            className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 active:scale-95 shadow-md transition">
            Reload App
          </button>
        </div>
      </body>
    </html>
  );
}
