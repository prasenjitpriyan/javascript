'use client';

import { useGlobalError } from '@/components/GlobalErrorContext';

export default function Example() {
  const { push } = useGlobalError();

  async function handleClick() {
    try {
      throw new Error('Failed to fetch user data');
    } catch (err) {
      push(err.message, { endpoint: '/api/user' });
    }
  }

  return (
    <div className="p-8">
      <button
        onClick={handleClick}
        className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
        Trigger Error Toast
      </button>
    </div>
  );
}
