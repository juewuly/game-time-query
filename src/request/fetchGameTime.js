import axios from 'axios';

const fetchGameTime = ({ qid, appkey, source, posterkey }) => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/timeout?qid=${qid}&appkey=${appkey}&source=${source}&posterkey=${posterkey}`)
    .then(response => {
      const { data } = response;
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
}

export default fetchGameTime;