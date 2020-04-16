> 查询游戏时长限制信息

* [Features](#features)
* [Installing](#installing)
* [Usage](#usage)
* [API](#api)
* [License](#license)

***

## Features
* 查询游戏时长限制信息

## Installing

**NPM**
```bash
$ npm i game-time-query -S
```

**SCRIPT**
```bash
  <script type="text/javascript" src="https://unpkg.com/game-time-query/dist/game-time-query.min.js"></script>
```

## Usage

1. 执行`const Instance = GameTimeQuery.Instance`获取实例。
2. 执行`Instance.fetch({qid, appkey, source}).then(res => {}).catch(err => {})`获取游戏时长信息。

***
### Example

```javascript
  const Instance = GameTimeQuery.Instance;
  const params = {
    qid: 'qid',
    appkey: 'qppkey',
    source: 'source'
  }

  Instance.fetch(params)
  .then(res => console.log('success', res))
  .catch(err => console.error('error', err))
```

## API
> ## `GameTimeQuery.Instance.fetch(object))`
fetch方法用于拉取游戏时长信息，返回promise。

#### 请求参数
| 名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| qid | `String`（必填） | 用户id | --- |
| appkey | `String`（必填） | 游戏的key | --- |
| source | `String`（必填） | 来源（sdk_game、page_game、html_game） | --- |

#### 返回值
| 名称 | 类型 | 描述 |
| --- | --- | --- |
| isOpen | `Boolean` | 是否开启 |
| isAdult | `Boolean` | 是否成年 |
| allowPlay | `Boolean` | 是否充许继续玩 |
| nextInterval | `Number` | 下次轮询时间间隔（单位：毫秒）） |

## License
MIT