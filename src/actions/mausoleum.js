import { SET_SPACES, UPDATE_SPACE } from '../constants';

export const setSpaces = (location, data) => ({
  type: SET_SPACES,
  data,
  location,
});

export const updateSpace = (location, data) => ({
  type: UPDATE_SPACE,
  data,
  location,
});
