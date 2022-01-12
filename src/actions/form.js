import { CLOSE_FORM, OPEN_FORM } from '../constants';
import { updateSpace } from './mausoleum';

export const closeForm = () => ({ type: CLOSE_FORM });

export const openForm = (data) => ({ type: OPEN_FORM, data });

export const saveFormData = (location, data) => (dispatch) => {
  fetch(`/api/${data.id}`, {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((json) => {
      if (!json.error) {
        dispatch(updateSpace(location, data));
        dispatch(closeForm());
      } else {
        const { code, errno, sqlMessage } = json.error;
        console.error({ code, errno, sqlMessage });
      }
    })
    .catch((error) => console.error(error));
};
