// ------------------------------------
// Persisting query string in state
// ------------------------------------
import { useState, useCallback } from 'react';

export const useLastQuery = (key = 'lastQuery') => {
  const [input, setInput] = useState(() => {
    const persisted = sessionStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : '';
  });

  const setPersistedInput = useCallback(
    (newState) => {
      setInput(newState);
      sessionStorage.setItem(key, JSON.stringify(newState));
    },
    [key]
  );

  return [input, setPersistedInput];
};
