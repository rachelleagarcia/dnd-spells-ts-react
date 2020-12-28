// ------------------------------------
// Shows list of spells
// ------------------------------------
import { useReducer, useEffect } from 'react';
import { apiGet } from '../utils';
import { reducer } from './reducers';

export const useShowSpell = (spellId: string) => {
  const [state, dispatch] = useReducer(reducer, {
    spell: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    apiGet(`spells/${spellId}`)
      .then((results) => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', spell: results });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAIL', error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [spellId]);

  return state;
};
