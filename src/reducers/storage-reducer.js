import { StorageTypes } from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  progress: 0,
  fileName: ''
};

export default (state = INITIAL_STATE, { type, payload = null }) => {

  switch (type) {
    case StorageTypes.UPLOAD_FILE:
      return {
        ...state,
        isLoading: true,
        fileName: payload.fileName || '',
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
    case StorageTypes.UPLOAD_FILE_FAIL:
      return {
        ...state,
        isLoading: false,
        progress: 0,
        fileName: ''
      };    default:
      return state;
  }
}
