import { initialState } from "../store/store";
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";
import { AnyAction } from "redux";

const favoritesReducer = (state = initialState.addFavorite, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
