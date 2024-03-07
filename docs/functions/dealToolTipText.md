---
group:
  title: 数据处理
  order: 0
toc: content
order: 1
apiHeader:
  defaultImport: true
---

# dealToolTipText

### 介绍

使用 `tooltip` 显示的文本处理，主要是对文本进行截取，当文本过长时，显示 `tooltip`，并且 `tooltip` 的内容为原始文本

### 使用

```tsx
import React from 'react';
import { dealToolTipText } from 'lzkj-data-web-pack';

export default () => dealToolTipText('尝试将鼠标悬浮在此处');
```

```tsx
/**
 * title: 在表格中使用
 * description: 在表格中使用 `dealToolTipText`
 */
import React from 'react';
import { Table } from '@alifd/next';
import '@alifd/next/lib/table/style';
import { dealToolTipText } from 'lzkj-data-web-pack';

const dataSource = () => {
  return Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: `名称${index + 1}`.repeat(10),
    desc: `描述${index + 1}`.repeat(30),
  }));
};

export default () => {
  return <Table dataSource={dataSource()}>
    <Table.Column width={'20%'} title="ID" dataIndex="id" cell={(value) => dealToolTipText(value)} />
    <Table.Column width={'30%'} title="名称" dataIndex="name" cell={(value) => dealToolTipText(value, { maxWidth: 420 })} />
    <Table.Column width={'50%'} title="描述" dataIndex="desc" cell={(value) => dealToolTipText(value, { rows: 2 })} />
  </Table>;
};
```

### 入参

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 悬浮框文本 | `any` | `*` |
| options | 配置项 | `IOptions` | `{maxWidth: 300, rows: 1}` |

```ts
interface IOptions {
  maxWidth?: number | string;
  rows?: number;
}
```

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| result | 悬浮框JSX元素 | `React.JSX.Element` |
