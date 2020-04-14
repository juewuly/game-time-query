import axios from 'axios';

const fetchGameTime = ({ qid, appkey, source }) => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/timeout?qid=${qid}&appkey=${appkey}&source=${source}`)
    .then(response => {
      const { data } = response;
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
}

export default fetchGameTime;