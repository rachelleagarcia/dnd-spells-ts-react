// ------------------------------------
// Reducers
// ------------------------------------

// Reducer for displaying spells
export const reducer = (prevState: any, action: any) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, error: null, spell: action.spell };
    }

    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

// Reducer for spell favourites
type FavAction =
  | { type: 'ADD_SPELL'; spellId: string }
  | { type: 'REMOVE_SPELL'; spellId: string };

export const spellsReducer = (prevState: any, action: FavAction) => {
  switch (action.type) {
    case 'ADD_SPELL': {
      return [...prevState, action.spellId];
    }

    case 'REMOVE_SPELL': {
      return prevState.filter((spellId: string) => spellId !== action.spellId);
    }

    default:
      return prevState;
  }
};
