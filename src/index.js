/**
 * author: liuyang9
 * description: 游戏时长查询
 */

import Query from './query';

export default class GameTimeQuery {
  constructor() {
    if (!GameTimeQuery._instance) {
      GameTimeQuery._instance = Query.Instance;
    }

    return GameTimeQuery._instance;
  }

  /**
   * 获取单例
   */
  static get Instance() {
    if (!this._instance) {
      this._instance = Query.Instance;
    }

    return this._instance;
  }
}