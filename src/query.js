/**
 * author: liuyang9
 * description: 游戏时长查询
 */

import { fetchGameTime } from './request';

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
   * @param {*} param0 {qid: 用户id, appkey: 游戏的key, source: 平台来源}
   */
  fetch({ qid, appkey, source }) {
    return new Promise((resolve, reject) => {
      fetchGameTime({ qid, appkey, source })
      .then(res => {
        if (res.errno !== 0) {
          reject(res);
        }

        const { data } = res;
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