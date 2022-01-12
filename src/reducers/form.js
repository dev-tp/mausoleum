import { CLOSE_FORM, OPEN_FORM } from '../constants';

const initialState = { data: null, open: false };

export default function form(state = initialState, action) {
  switch (action.type) {
    case OPEN_FORM:
      return { data: action.data, open: true };
    case CLOSE_FORM:
      return initialState;
    default:
      return state;
  }
}
