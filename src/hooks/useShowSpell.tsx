// ------------------------------------
// Shows list of spells
// ------------------------------------
import { useReducer, useEffect } from 'react';
import { apiGet } from '../utils';

const initialState: SpellState = {
  spell: null,
  isLoading: true,
  error: undefined,
};

interface SpellState {
  spell: any;
  isLoading: boolean;
  error?: string;
}

type SpellAction =
  | {
      type: 'FETCH_FAILED';
      spell: undefined;
      isLoading: boolean;
      error: string;
    }
  | {
      type: 'FETCH_SUCCESS';
      spell: SpellState;
      isLoading: boolean;
      error: undefined;
    };

export const spellReducer = (state: SpellState, action: SpellAction) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return {
        spell: action.spell,
        isLoading: false,
        error: undefined,
      };
    }

    case 'FETCH_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export const useShowSpell = (spellId: string) => {
  const [state, dispatch] = useReducer(spellReducer, initialState);

  useEffect(() => {
    let isMounted = true;

    apiGet(`spells/${spellId}`)
      .then((results) => {
        if (isMounted) {
          dispatch({
            type: 'FETCH_SUCCESS',
            spell: results,
            isLoading: false,
            error: undefined,
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({
            type: 'FETCH_FAILED',
            spell: undefined,
            isLoading: false,
            error: err.message,
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [spellId]);

  return state;
};
