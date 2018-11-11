import Http from 'superagent';
import { AppTypes } from '../constants';

const API_URL = process.env.REACT_APP_API_URL;

export const showToast = ({ message }) => (dispatch) =>
  dispatch({ type: AppTypes.SHOW_TOAST, payload: { message } });

export const hideToast = () => (dispatch) =>
  dispatch({ type: AppTypes.HIDE_TOAST });

export const submitForm = (payload) => (dispatch) => {
  Http
    .post(`${API_URL}/api/submit`)
    .send(payload)
    .end((err) => {
      dispatch({ type: AppTypes.SUBMIT_FORM });
      if (err) {
        dispatch({ type: AppTypes.SHOW_TOAST, payload: { message: 'Error in submitting...' } });
        return dispatch({ type: AppTypes.SUBMIT_FORM_FAIL });
      }
      dispatch({ type: AppTypes.SHOW_TOAST, payload: { message: 'Submitted Successfully' } });
      dispatch({ type: AppTypes.SUBMIT_FORM_SUCCESS });
    })
};
