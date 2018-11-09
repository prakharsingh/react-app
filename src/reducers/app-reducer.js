import * as AppTypes from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  signedUrl: '',
  progress: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppTypes.SUBMIT_FORM:
      return state;
    case AppTypes.UPLOAD_FILE:
      return {
        ...state,
        isLoading: true,
      };
    case AppTypes.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        progress: 0
      };
    case AppTypes.UPLOAD_FILE_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    default:
      return state;
  }
}
