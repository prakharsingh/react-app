import { buffers, eventChannel, END } from 'redux-saga';

export default (endpoint, file, signedData) => {
  return eventChannel(emitter => {
    const xhr = new XMLHttpRequest();

    const onProgress = (e) => {
      if (e.lengthComputable) {
        const progress = Math.round(e.loaded / e.total);
        emitter({ progress });
      }
    };

    const onFailure = () => {
      emitter({ err: new Error('Upload failed') });
      emitter(END);
    };

    xhr.upload.addEventListener("progress", onProgress);
    xhr.upload.addEventListener("error", onFailure);
    xhr.upload.addEventListener("abort", onFailure);

    xhr.onreadystatechange = () => {
      const { readyState, status } = xhr;
      if (readyState === 4) {
        if (status === 200) {
          emitter({ success: true });
          emitter(END);
        }
        else {
          onFailure();
        }
      }
    };

    xhr.open("POST", endpoint, true);
    Object
      .keys(signedData)
      .map(key => xhr.setRequestHeader(key, signedData[key]));
    xhr.send(file);

    return () => {
      xhr.upload.removeEventListener("progress", onProgress);
      xhr.upload.removeEventListener("error", onFailure);
      xhr.upload.removeEventListener("abort", onFailure);
      xhr.onreadystatechange = null;
      xhr.abort();
    };
  }, buffers.sliding(2));
}
