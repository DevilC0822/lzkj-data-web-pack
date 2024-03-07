---
group:
  title: 数据输入
  order: 1
toc: content
order: 1
---

# Pagination

## 代码演示

<code src="./demo/Pagination/Default.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --------------- | ----- | ---------------- | ------------------ |
| <div style="width: 120px">**pageInfo**</div> | <div style="width: 500px">数据源：描述节点的配置集合</div> | <div style="width: 200px">`IPageInfo`</div> | <div style="width: 100px">`*`</div> |
| **pageSizeList**| 当前选中的值 | `number[]` | `{}` |
| **onChange** | 选中值改变时的回调 | `(pageInfo: IPageInfo) => void` | `*` |

## 类型

### IPageInfo

```typescript
interface IPageInfo {
  total: number
  current: number
  size: number
}
```