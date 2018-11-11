import { AppTypes } from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  showToast: false,
  toastMessage: '',
};

export default (state = INITIAL_STATE, { type, payload = null }) => {
  switch (type) {
    case AppTypes.SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        toastMessage: payload.message || ''
      };
    case AppTypes.HIDE_TOAST:
      return {
        ...state,
        showToast: false,
        toastMessage: ''
      };
    case AppTypes.SUBMIT_FORM:
      return {
        ...state,
        isLoading: true,
      };
    case AppTypes.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case AppTypes.SUBMIT_FORM_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
