import {call, all, take, fork, takeLatest, put } from 'redux-saga/effects';
import AppService from '../services';
import * as AppTypes from '../constants';
import { uploadFileSuccess, uploadFileProgress, uploadFileFail } from '../actions';
import randomString from '../utils/random';
import uploadHelper from '../utils/upload';
import urlHelper from '../utils/url';
import Http from 'superagent';

function* submitForm({payload}) {
  try {
    yield all([
      call(AppService.submit, payload),
    ]);
  }
  catch (e) {

  }
}

function* watchSubmitForm () {
  yield take(AppTypes.SUBMIT_FORM, submitForm);
}

function* uploadFile({ payload: { file } }) {
  try {
    const key = randomString();

    const { status, data }  = yield call(AppService.fetchSignedUrl, { key });

    if(status === 200 && data) {
      const { query, url } = urlHelper(data.endpoint);
      file.key = key;

      Http
        .post(url)
        .field('key', key)
        .field('AWSAccessKeyId', query.AWSAccessKeyId)
        .field('acl', query.Acl)
        .field('signature', query.Signature)
        .field('content-type', file.type)
        .attach('file', file, file.name)
        .on('progress', function(e) {
          console.log(e.percent)
        })
        .end(function(err, res) {
          console.log(err, res);
        });

      // const channel = yield call(uploadHelper, url, file, query);

      // while (true) {
      //   const { progress = 0, err, success } = yield take(channel);
      //   if (err) {
      //     yield put(uploadFileFail(err));
      //     return;
      //   }
      //   if (success) {
      //     yield put(uploadFileSuccess());
      //     return;
      //   }
      //   yield put(uploadFileProgress(progress));
      // }
    }
  }
  catch (e) {
    yield put(uploadFileFail(e))
  }
}

function* watchUploadFile () {
  yield takeLatest(AppTypes.UPLOAD_FILE, uploadFile)
}


export default function* rootSaga() {
  yield all([
    fork(watchSubmitForm),
    fork(watchUploadFile)
  ])
}
