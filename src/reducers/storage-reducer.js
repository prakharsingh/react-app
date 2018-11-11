import { StorageTypes } from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  progress: 0,
};

export default (state = INITIAL_STATE, { type, payload = null }) => {

  switch (type) {
    case StorageTypes.UPLOAD_FILE:
      return {
        ...state,
        isLoading: true,
      };
    case StorageTypes.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        progress: 0
      };
    case StorageTypes.UPLOAD_FILE_PROGRESS:
      return {
        ...state,
        progress: payload && payload.progress,
      };
    default:
      return state;
  }
}
