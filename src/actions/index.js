import * as AppTypes from '../constants';

export const submitForm = (payload) => ({
  type: AppTypes.SUBMIT_FORM,
  payload,
});

export const uploadFile = (payload) => ({
  type: AppTypes.UPLOAD_FILE,
  payload
});

export const uploadFileProgress = (payload) => ({
  type: AppTypes.UPLOAD_FILE_PROGRESS,
  payload
});

export const uploadFileSuccess = (payload) => ({
  type: AppTypes.UPLOAD_FILE_SUCCESS,
  payload
});

export const uploadFileFail = (payload) => ({
  type: AppTypes.UPLOAD_FILE_FAIL,
  payload
});
