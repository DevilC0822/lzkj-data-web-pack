---
group:
  title: 数据输入
  order: 1
toc: content
order: 2
---

# BasicQueryForm

<Badge type="warning">alpha</Badge>

通过配置快速生成查询表单，目前仅支持非受控组件。

## 代码演示

<code src="./demo/BasicQueryForm/Default.tsx"></code>

<code src="./demo/BasicQueryForm/LabelAlign.tsx"></code>

<code src="./demo/BasicQueryForm/OperateBtn.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| - | --- | --------- | -------- |
| <div style="width: 120px">**isBtnLastSide**</div> | <div style="width: 300px">操作按钮位置是否在最后一个条件的右侧</div>| <div style="width: 200px">`boolean`</div> | <div style="width: 140px">`true`</div> |
| **queryConditionsList** | 查询条件的配置集合 | `IQueryConditionsList[]` | `[]` |
| **searchResetGroupProps** | 查询重置按钮组的配置 | `object` | `{}` |
| **onSearch** | 查询按钮的回调 | `(v: any) => void` | `-` |
| **onReset** | 重置按钮的回调 | `() => void` | `-` |
| **customOperateBtn** | 自定义操作按钮 | `React.ReactNode \| null` | `-` |
| **labelAlign** | label的对齐方式 | `'top' \| 'left'` | `'top'` |
| **labelCol** | label的布局 | `object` | `{ fixedSpan: 4 }` |
| **wrapperCol** | 表单项的布局 | `object` | `{ span: 18 }` |

## 类型

### IQueryConditionsList
```ts
interface IQueryConditionsList {
  /**
   * @description 表单项的类型
   */
  type: 'input' | 'select' | 'rangePicker' | 'input-number' | 'autoComplete'
  /**
   * @description 表单项的label
   */
  label: string
  /**
   * @description 表单项的name
   */
  name?: string
  /**
   * @description 透传到表单项的props
   */
  propsTransfer?: object
  /**
   * @description 表单项宽度伸缩值
   */
  span?: number
  /**
   * @description 表单项宽度固定值
   */
  fixedSpan?: number
  /**
   * @description 表单项标签配置
   */
  labelCol?: object
  /**
   * @description 表单项配置
   */
  wrapperCol?: object
}
```