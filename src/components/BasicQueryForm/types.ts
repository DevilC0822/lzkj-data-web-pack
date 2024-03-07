export interface IQueryConditionsList {
  type: 'input' | 'select' | 'rangePicker' | 'input-number' | 'autoComplete'
  label: string
  name?: string
  propsTransfer?: object
  span?: number
  fixedSpan?: number
  labelCol?: object
  wrapperCol?: object
}