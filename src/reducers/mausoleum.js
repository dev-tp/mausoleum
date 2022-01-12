import { SET_SPACES, UPDATE_SPACE } from '../constants';

const initialState = { spaces: {} };

export default function mausoleum(state = initialState, action) {
  switch (action.type) {
    case SET_SPACES:
      return { spaces: { ...state.spaces, [action.location]: action.data } };
    case UPDATE_SPACE:
      return {
        spaces: {
          ...state.spaces,
          [action.location]: state.spaces[action.location].map((space) =>
            space.id === action.data.id ? action.data : space
          ),
        },
      };
    default:
      return state;
  }
}
