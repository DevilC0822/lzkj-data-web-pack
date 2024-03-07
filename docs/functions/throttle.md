---
group:
  title: 函数
  order: 2
toc: content
order: 1
apiHeader:
  defaultImport: true
---

# throttle

### 介绍

节流函数，返回一个新的函数，该函数在 wait 毫秒内最多执行一次，如果 wait 毫秒内调用多次，则返回最后一次调用的结果。
来自于`lodash`库。

### 入参

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| func | 需要节流的函数 | `Function` | `*` |
| wait | 节流的时间间隔 | `number` | `0` |
| options | 配置项 | `Object` | `{}` |
| options.leading | 指定调用在节流开始前 | `boolean` | `true` |
| options.trailing | 指定调用在节流结束后 | `boolean` | `true` |

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| Function | 节流函数 | `Function` |

### 使用

使用案例来自于`lodash`库。

[官方文档](https://lodash.com/docs/4.17.15#throttle)

```ts
import { throttle } from 'lzkj-data-web-pack';

// 避免在滚动时过度更新位置。
jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 
// 当点击事件触发时调用 `renewToken`，但每 5 分钟调用一次不超过一次。
var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);
 
// 取消尾随的节流调用。
jQuery(window).on('popstate', throttled.cancel);
```