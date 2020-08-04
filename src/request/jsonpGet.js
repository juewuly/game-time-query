import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const HOST = '//pulsar.mgame.360.cn'

const jsonpGet = ({ 
  url, 
  params, 
}) => {
  let options = {
    headers: { Accept: 'application/json' },
    jsonpCallback: 'callback',
    jsonpCallbackFunction: 'timeoutApiCallback'
  }

  url =/https?:/.test(url) ? url :  `${HOST}${url}`;
  if (params) {
    params = qs.stringify(params);
    url = `${url}?${params}`;
  }
  
  return new Promise((resolve, reject) => {
    fetchJsonp(url, options)
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default jsonpGet;