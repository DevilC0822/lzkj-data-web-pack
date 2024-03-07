---
group:
  title: 函数
  order: 1
toc: content
order: 1
apiHeader:
  defaultImport: true
---

# debounce

### 介绍

防抖函数，用于减少函数的调用次数。来自于`lodash`库。

### 入参

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| func | 需要防抖的函数 | `Function` | `*` |
| wait | 延迟时间，单位毫秒 | `number` | `0` |
| options | 配置项 | `object` | `{}` |
| options.leading | 是否在延迟开始前调用 | `boolean` | `false` |
| options.maxWait | 设置 func 允许被延迟的最大值 | `number` | `0` |
| options.trailing | 是否在延迟结束后调用 | `boolean` | `true` |

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| Function | 防抖函数 | `Function` |

### 使用

使用案例来自于`lodash`库。

[官方文档](https://lodash.com/docs/4.17.15#debounce)

```ts
import { debounce } from 'lzkj-data-web-pack';

// 当窗口大小处于不稳定状态时，避免代价高昂的计算。
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 
// 单击时调用“sendMail”，消除后续调用。
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));
 
// 确保在去抖调用 1 秒后调用一次“batchLog”。
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);
 
// 取消后面的debounced调用。
jQuery(window).on('popstate', debounced.cancel);
```