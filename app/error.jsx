'use client';

import { useEffect } from 'react';

const Error = () => {
  useEffect(() => {
    console.error(error);
  }, []);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
