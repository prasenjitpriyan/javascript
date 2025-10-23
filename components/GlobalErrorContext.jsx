'use client';

import { createContext, useCallback, useContext, useState } from 'react';

const GlobalErrorContext = createContext();

export function GlobalErrorProvider({ children }) {
  const [errors, setErrors] = useState([]);

  const push = useCallback((message, meta) => {
    const id = Date.now() + Math.random();
    setErrors((prev) => [{ id, message, meta }, ...prev]);
  }, []);

  const dismiss = useCallback((id) => {
    setErrors((prev) => prev.filter((e) => e.id !== id));
  }, []);

  return (
    <GlobalErrorContext.Provider value={{ errors, push, dismiss }}>
      {children}
    </GlobalErrorContext.Provider>
  );
}

export const useGlobalError = () => useContext(GlobalErrorContext);
