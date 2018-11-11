import Http from 'superagent';
import { change } from 'redux-form';
import { AppTypes, StorageTypes } from '../constants';

const API_URL = process.env.API_URL || '';
const BUCKET_BASE_URL = 'https://s3.amazonaws.com/assets-prakhar/';

const internals = {
  fetchSignedUrl: (query) => Http.get(`${API_URL}/api/storage/s3/signed-url/public-read`).query(query),
  uploadFile: (endpoint, fields, file) =>
    Http
      .post(endpoint)
      .field(fields)
      .attach('file', file, file.name)
};

export const initiateUpload = ({ file, key }) => {
  return async dispatch => {
    try {
      dispatch({ type: StorageTypes.UPLOAD_FILE });
      const { body, statusCode } = await internals.fetchSignedUrl({ key });

      if (statusCode === 200) {
        const fields = {
          key: body.key,
          AWSAccessKeyId: body.awsKey,
          policy: body.policy,
          signature: body.signature,
          acl: 'public-read',
          'content-type': file.type,
        };

        const { error, statusCode } = await internals
          .uploadFile(body.host, fields, file)
          .on('progress', (e) =>
            dispatch({
              type: StorageTypes.UPLOAD_FILE_PROGRESS,
              payload: {
                progress: Math.round(e.percent)
              }
            })
          );

        if (error) throw new Error(error);
        if (statusCode >= 200 && statusCode < 301) {
          dispatch(change('userForm', 'profilePicUrl', `${BUCKET_BASE_URL}${decodeURIComponent(key)}`, ''));
          dispatch({ type: StorageTypes.UPLOAD_FILE_SUCCESS });
        }
          return dispatch({ type: AppTypes.SHOW_TOAST, payload: { message: 'Upload Successful' } });
      } else {
        throw new Error('Upload Failed')
      }
    } catch (err) {
      dispatch({ type: StorageTypes.UPLOAD_FILE_FAIL });
      dispatch({ type: AppTypes.SHOW_TOAST, payload: { message: 'Upload failed' } });
    }
  }
};
