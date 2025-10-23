'use client';

import { useGlobalError } from './GlobalErrorContext';

export function GlobalErrorToast() {
  const { errors, dismiss } = useGlobalError();

  if (!errors.length) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {errors.map((e) => (
        <div
          key={e.id}
          role="alert"
          aria-live="assertive"
          className="bg-red-50 border border-red-200 text-red-800 rounded-xl shadow-lg p-4 max-w-sm w-full transition-all animate-slide-in">
          <div className="flex justify-between items-start gap-3">
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm">{e.message}</p>
              {e.meta && (
                <pre className="text-xs mt-2 bg-white p-2 rounded text-gray-600 overflow-auto">
                  {JSON.stringify(e.meta, null, 2)}
                </pre>
              )}
            </div>
            <button
              onClick={() => dismiss(e.id)}
              aria-label="Close error notification"
              className="text-xs bg-white px-2 py-1 rounded-md border hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-400 active:scale-95">
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
