---
group:
  title: 数据处理
  order: 0
toc: content
order: 0
apiHeader:
  defaultImport: true
---

# formatNum

### 介绍

对数字进行格式化，比如将数字 1234567890 格式化为 1,234,567,890

也可以对数字进行百分比的格式化，比如将数字 0.1234 格式化为 12.34%


### 使用

```ts
import { formatNum } from 'lzkj-data-web-pack';

formatNum(1234567890); // 1,234,567,890
formatNum(0.1234, true, 2); // 12.34%
formatNum(0.1234, true, 0); // 12%
formatNum(0.1234, false, 2); // 0.12
formatNum(0.1234, false, 0); // 0
formatNum(null); // -
formatNum(undefined, false, 0, '--'); // --
```

### 入参

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| num | 需要格式化的数字 | `number \| string` | `*` |
| isRatio | 是否需要格式化成百分比 | `boolean` | `false` |
| digit | 精度，保留小数位数 | `number` | `0` |
| errorSymbol | 异常时返回的字符串标识 | `string` | `-` |

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| result | 格式化后的数字 | `string` |
