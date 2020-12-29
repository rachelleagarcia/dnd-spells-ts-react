// ------------------------------------
// Saving favourites to local storage
// ------------------------------------
import { useReducer, useEffect } from 'react';
import { faveReducer } from './favReducer';

const usePersistedReducer = (
  reducer: any,
  initialState: string[],
  key: string
) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export const useSpells = (key = 'spells') => {
  return usePersistedReducer(faveReducer, [], key);
};
