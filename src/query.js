/**
 * author: liuyang9
 * description: 游戏时长查询
 */

import { fetchGameTime, jsonpFetchGameTime } from './request';

export default class Query {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new Query();
    }

    return this._instance;
  }

  /**
   * 查询游戏时长
   * @param {*} param0 {qid: 用户id, appkey: 游戏的key, source: 平台来源, posterkey: 海报key}
   */
  fetch({ qid, appkey, source, posterkey, isJsonp }) {
    const fetchFunc = isJsonp ? jsonpFetchGameTime : fetchGameTime;

    return new Promise((resolve, reject) => {
      fetchFunc({ qid, appkey, source, posterkey })
      .then(res => {
        let data = null;

        if (isJsonp) {
          data = res
        } else {
          data = res.data;

          if (res.errno !== 0) {
            reject(res);
          }
        }

        const result = {
          // 开关是否开启
          isOpen: data.timeout_switch === '1' ? true : false,
          // 是否成年
          isAdult: data.is_adult === '1' ? true : false,
          // 是否允许继续玩
          allowPlay: data.time_up !== true ? true : false,
          // 下次轮询时间间隔（单位毫秒）
          nextInterval: data.time_interval * 1000
        };

        resolve(result);
      })
      .catch(err => reject(err));
    });
  }
}