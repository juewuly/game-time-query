import jsonpGet from './jsonpGet'

const jsonpFetchGameTime = ({ qid, appkey, source, posterkey }) => {
  return new Promise((resolve, reject) => {
    jsonpGet({
      url: '/api/timeout',
      params: {
        qid,
        appkey,
        source,
        posterkey: posterkey ? posterkey : '',
        ts: new Date().getTime()
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