import { Dayjs } from 'dayjs';

export type IDataSourceValue =
  | 'day'
  | 'week'
  | 'month'
  | 'year'
  | 'day-range'
  | 'week-range'
  | 'month-range'
  | 'year-range'
  | 'mtd'
  | 'ytd'
  | 'custom'
  | 'custom-range'
  | 'last7days'
  | 'last30days'
  | 'R3'
  | 'R6'
  | 'R12'
  | 'P1M'
  | 'P3M'
  | 'P6M'
  | 'P12M';

export interface IDataSource {
  /**
   * @description 时间类型的名称
   * @default ''
   */
  name?: string;
  /**
   * @description 时间类型的值
   * @required true
   */
  value: IDataSourceValue;
  /**
   * @description 最大时间间隔，单位天
   * @default undefined
   */
  maxTimeInterval?: number;
  /**
   * @description 超过最大时间间隔时的提示信息
   * @default `时间间隔不能超过${maxTimeInterval}天`
   */
  overcueMsg?: string;
  /**
   * @description 自定义禁用日期函数，默认的禁用日期函数是禁用未来的日期即dateOffset为-1
   * @default undefined
   */
  customDisabledDate?: (v: Dayjs, mode: string) => boolean;
}
