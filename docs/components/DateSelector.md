---
group:
  title: 数据输入
  order: 1
toc: content
order: 0
---

# DateSelector

## 代码演示

<code src="./demo/DateSelector/Default.tsx"></code>

<code src="./demo/DateSelector/MaxTimeInterval.tsx"></code>

<code src="./demo/DateSelector/Prefix.tsx"></code>

<code src="./demo/DateSelector/DateOffest.tsx"></code>

<code src="./demo/DateSelector/CustomDisableDate.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --------------- | ----- | ---------------- | ------------------ |
| <div style="width: 120px">**dataSource**</div> | <div style="width: 500px">数据源：描述节点的配置集合</div> | <div style="width: 200px">`IDataSource[]`</div> | <div style="width: 100px">`[]`</div> |
| **value**| 当前选中的值 | `IValue` | `{}` |
| **changeValue** | 选中值改变时的回调 | `(v: IValue) => void` | `() => {}` |
| **dateOffset** | 日期偏移量：默认为-1，表示当前日期的前一天，0表示当前日期，1表示当前日期的后一天，以此类推 | `number` | `-1` |
| **prefix** | 前缀：日期选择器的前缀 | `IPrefix` | `{}` |
| **select**| 选择器：日期选择器的选择 | `ISelect` | `{}` |
| **datePicker** | 日期选择器：日期选择器的日期选择器 | `IDatePicker` | `{}` |
| **searchResetGroup** | 查询重置组：日期选择器的查询重置组 | `ISearchResetGroup` | `{}` |
| **onSearch** | 查询按钮回调 | `(v: IValue) => void` | `() => {}` |
| **onReset** | 重置按钮回调 | `() => void` | `() => {}` |

## 类型

### IProps

```typescript
interface IProps {
  dataSource: IDataSource[]
  value: {
    dateType: string
    startDate: string
    endDate: string
  }
  changeValue: any
  dateOffset?: number // default: -1
  prefix?: {
    name?: string // default: '时间
    direction?: 'left' | 'top' // default: 'left'
    hasColon?: boolean // default: true
    customClass?: string // default: ''
  }
  select?: {
    customClass?: string // default: ''
    customStyle?: object // default: {}
  }
  datePicker?: {
    customClass?: string // default: ''
    customStyle?: object // default: {}
    hasClear?: boolean // default: false
  }
  searchResetGroup?: {
    show?: boolean // default: true
    searchName?: string // default: '查询'
    resetName?: string // default: '重置'
    customClass?: string // default: ''
    customStyle?: object // default: {}
    showSearchIcon?: boolean // default: true
    showResetIcon?: boolean // default: true
    onSearch?: () => void // 查询按钮回调
    onReset?: () => void // 重置按钮回调
  },
  onSearch: (v: {
    dateType: string
    startDate: string
    endDate: string
  }) => void // 查询按钮回调
  onReset?: () => void // 重置按钮回调
}
```

### IDataSource

```typescript
interface IDataSource {
  /**
   * @description 时间类型的名称
   * @default ''
   */
  name?: string,
  /**
   * @description 时间类型的值
   * @required true
   */
  value: IDataSourceValue,
  /**
   * @description 最大时间间隔，单位天
   * @default undefined
   */
  maxTimeInterval?: number,
  /**
   * @description 超过最大时间间隔时的提示信息
   * @default `时间间隔不能超过${maxTimeInterval}天`
   */
  overcueMsg?: string,
  /**
   * @description 自定义禁用日期函数，默认的禁用日期函数是禁用未来的日期即dateOffset为-1
   * @default undefined
   */
  customDisabledDate: customDisabledDate?: (v: Dayjs, mode: string) => boolean,
}
```

### IDataSourceValue

```typescript
type IDataSourceValue = 'day' | 'week' | 'month' | 'year' | 'day-range' | 'week-range' | 'month-range' | 'year-range' | 'mtd' | 'ytd' | 'custom' | 'custom-range' | 'last7days' | 'last30days' | 'R3' | 'R6' | 'R12' | 'P1M' | 'P3M' | 'P6M' | 'P12M';
```