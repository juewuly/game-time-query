import jsonpGet from './jsonpGet'

const jsonpFetchGameTime = ({ qid, appkey, source }) => {
  return new Promise((resolve, reject) => {
    jsonpGet({
      url: '/api/timeout',
      params: {
        qid,
        appkey,
        source
      }
    })
    .then(response => {
      const { data } = response;
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
}

export default jsonpFetchGameTime;