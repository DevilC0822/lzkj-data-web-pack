---
group:
  title: 通用
  order: 0
toc: content
order: 0
---

# SearchResetGroup

## 代码演示

<code src="./demo/SearchResetGroup/Default.tsx"></code>

<code src="./demo/SearchResetGroup/CustomBtn.tsx"></code>

## API

| 属性| 说明 | 类型 | 默认值 |
| --- | ---- | ---- | -- |
| <div style="width: 120px">**customClass**</div> | <div style="width: 500px">按钮组自定义类名</div> | <div style="width: 200px">`string`</div> | <div style="width: 100px">`''`</div> |
| **customStyle** | 按钮组样式 | `object` | `{}` |
| **search** | 查询按钮配置 | `ISearch` | `{}` |
| **reset** | 重置按钮配置 | `IReset` | `{}` |
| **isFormType** | 是否是表单类型 | `boolean` | `false` |
| **onSearch** | 查询按钮回调 | `() => void` | `() => {}` |
| **onReset** | 重置按钮回调 | `() => void` | `() => {}` |

## 类型

### ISearch

```typescript
interface ISearch {
  name?: string
  isShowIcon?: boolean
  customStyle?: object
  customClass?: string
}
```

### IReset

```typescript
interface IReset {
  name?: string
  isShowIcon?: boolean
  customStyle?: object
  customClass?: string
}
```