import { eventChannel, END } from 'redux-saga';
import { take, fork, put, call } from'redux-saga/effects';

function asyncTask(callback) {
  if (callback) {
    setTimeout(() => {
      callback('progress');
    }, 300);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('finish');
    }, 500);
  });
}

function createAsyncTaskRunner(data) {

  let emit;
  const chan = eventChannel(emitter => {
    emit = emitter;
    return () => {}
  });

  const promise = asyncTask((data) => {
    emit('PROGRESS');
    /*
       stop if 100% uploaded (using inside project)
       if (data && data.progress === 1) {
        emit(END);
      }
    */
  });


  return [ promise, chan ];
}


function* watchOnProgress(chan) {
  while (true) {
    const data = yield take(chan);
    yield put({ type: 'PROGRESS', payload: data });
  }
}

function* uploadSource(action) {
  const [ promise, chan ] = createAsyncTaskRunner('test');
  yield fork(watchOnProgress, chan);
  try {
    const result = yield call(() => promise);
    put({ type: 'SUCCESS', result });
  } catch (err) {
    put({ type: 'ERROR' });
  }
}
