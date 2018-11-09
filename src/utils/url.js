export default (url) => {
  const query = {};
  const splitUrl = url.split('?');
  const queryString = splitUrl[1];
  const pairs = queryString.split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return {
    query,
    url: splitUrl[0]
  };
}
