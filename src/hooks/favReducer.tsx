// ------------------------------------
// Favourites reducer
// ------------------------------------
type FavAction =
  | { type: 'ADD_SPELL'; spellId: string }
  | { type: 'REMOVE_SPELL'; spellId: string };

export const faveReducer = (state: [], action: FavAction) => {
  switch (action.type) {
    case 'ADD_SPELL': {
      return [...state, action.spellId];
    }

    case 'REMOVE_SPELL': {
      return state.filter((spellId: string) => spellId !== action.spellId);
    }

    default:
      return state;
  }
};
