import { DatePicker2, Message, Select } from '@alifd/next';
import '@alifd/next/lib/date-picker2/style';
import '@alifd/next/lib/message/style';
import '@alifd/next/lib/select/style';
import dayjs, { type Dayjs, type ManipulateType, type OpUnitType } from 'dayjs';
import 'dayjs/locale/zh-cn';
import React, { type FC } from 'react';
import SearchResetGroup from '../SearchResetGroup';
import './index.scss';
import type { IDataSource, IDataSourceValue } from './types';

dayjs.locale('zh-cn');

const { MonthPicker, YearPicker, WeekPicker, RangePicker } = DatePicker2;

interface IProps {
  dataSource: IDataSource[];
  value: {
    dateType: string;
    startDate: string;
    endDate: string;
  };
  changeValue: any;
  dateOffset?: number; // default: -1
  prefix?: {
    show?: boolean; // default: true
    name?: string; // default: '时间
    direction?: 'left' | 'top'; // default: 'left'
    hasColon?: boolean; // default: true
    customClass?: string; // default: ''
  };
  select?: {
    customClass?: string; // default: ''
    customStyle?: object; // default: {}
  };
  selectProps?: object; // default: {}
  datePicker?: {
    customClass?: string; // default: ''
    customStyle?: object; // default: {}
    hasClear?: boolean; // default: false
  };
  datePickerProps?: object; // default: {}
  searchResetGroup?: {
    show?: boolean; // default: true
    searchName?: string; // default: '查询'
    resetName?: string; // default: '重置'
    customClass?: string; // default: ''
    customStyle?: object; // default: {}
    showSearchIcon?: boolean; // default: true
    showResetIcon?: boolean; // default: true
    onSearch?: () => void; // 查询按钮回调
    onReset?: () => void; // 重置按钮回调
  };
  onSearch: (v: {
    dateType: string;
    startDate: string;
    endDate: string;
  }) => void; // 查询按钮回调
  onReset?: () => void; // 重置按钮回调
}

const disabledDate = (
  cur: Dayjs,
  mode: string,
  dateType = 'day',
  dateOffset = -1,
  customDisabledDate?: any,
) => {
  if (customDisabledDate) {
    return customDisabledDate(cur, mode);
  }
  return (
    cur >
    dayjs()
      .add(dateOffset, dateType as ManipulateType)
      .endOf('day')
  );
};

const lastDayMap: { [propName: string]: number } = {
  last7days: 6,
  last30days: 29,
  R3: 89,
  R6: 179,
  R12: 364,
};
const getDefaultDate = (dateType = 'day', dateOffset = -1) => {
  if (dateType === 'mtd' || dateType === 'ytd') {
    return [
      dayjs()
        .add(dateOffset, 'day')
        .startOf(dateType === 'mtd' ? 'month' : 'year')
        .format('YYYY-MM-DD'),
      dayjs().add(dateOffset, 'day').format('YYYY-MM-DD'),
    ];
  }
  if (dateType === 'custom' || dateType === 'custom-range') {
    return ['', ''];
  }
  if (['last7days', 'last30days', 'R3', 'R6', 'R12'].includes(dateType)) {
    return [
      dayjs()
        .add(dateOffset, 'day')
        .subtract(lastDayMap[dateType], 'day')
        .startOf('day')
        .format('YYYY-MM-DD'),
      dayjs().add(dateOffset, 'day').endOf('day').format('YYYY-MM-DD'),
    ];
  }
  if (['P1M', 'P3M', 'P6M', 'P12M'].includes(dateType)) {
    return [
      dayjs().add(dateOffset, 'month').startOf('month').format('YYYY-MM-DD'),
      dayjs().add(dateOffset, 'month').endOf('month').format('YYYY-MM-DD'),
    ];
  }
  const dealDateType = dateType.includes('range')
    ? dateType.split('-')[0]
    : dateType;
  return [
    dayjs()
      .add(dateOffset, dealDateType as ManipulateType)
      .startOf(dealDateType as OpUnitType)
      .format('YYYY-MM-DD'),
    dayjs()
      .add(dateOffset, dealDateType as ManipulateType)
      .endOf(dealDateType as OpUnitType)
      .format('YYYY-MM-DD'),
  ];
};
const dealDataSource = (dataSource: IDataSource[]) => {
  // 如果类型是IDataSourceValue[] 则处理成key value的对象数组
  if (
    Array.isArray(dataSource) &&
    dataSource.length > 0 &&
    typeof dataSource[0] === 'string'
  ) {
    // @ts-ignore
    return dataSource.map((item: IDataSourceValue) => ({
      label: item,
      value: item,
    }));
  }
  return dataSource.map((item: IDataSource) => ({
    label: item?.name ?? item.value,
    value: item.value,
  }));
};

const DateSelector: FC<IProps> = (props) => {
  const {
    dataSource = [],
    value = {
      dateType: 'day',
      startDate: '',
      endDate: '',
    },
    changeValue = () => {},
    dateOffset = -1,
    prefix = {
      show: false,
      name: '时间',
      direction: 'left',
      hasColon: true,
      customClass: '',
    },
    select = {
      customClass: '',
    },
    selectProps = {},
    datePicker = {
      customClass: '',
      hasClear: false,
    },
    datePickerProps = {},
    searchResetGroup = {
      show: false,
      searchName: '查询',
      resetName: '重置',
      customClass: '',
      customStyle: {},
      showSearchIcon: true,
      showResetIcon: true,
      onSearch: () => {},
      onReset: () => {},
    },
    onSearch = () => {},
    onReset = undefined,
  } = props;

  // 设置value的默认值
  // const dealInitValue = () => {
  //   const dateType =
  //     typeof dataSource[0] === 'string' ? dataSource[0] : dataSource[0].value;
  //   const [startDate, endDate] = getDefaultDate(dateType, dateOffset);
  //   changeValue({
  //     dateType,
  //     startDate,
  //     endDate,
  //   });
  // };

  const onInnerSearch = () => {
    onSearch(value);
  };
  const onInnerReset = () => {
    if (onReset) {
      onReset();
    } else {
      // dealInitValue();
    }
  };

  const onSelectChange = (cur: string) => {
    console.log(value);
    const [startDate, endDate] = getDefaultDate(cur, dateOffset);
    changeValue({
      dateType: cur,
      startDate,
      endDate,
    });
  };
  const onDateChange = (strDate: string) => {
    if (value.dateType === 'mtd' || value.dateType === 'ytd') {
      changeValue({
        ...value,
        startDate: dayjs(strDate)
          .startOf(value.dateType === 'mtd' ? 'month' : 'year')
          .format('YYYY-MM-DD'),
        endDate: strDate,
      });
      return;
    }
    changeValue({
      ...value,
      startDate: strDate,
      endDate: dayjs(strDate)
        .endOf(value.dateType as OpUnitType)
        .format('YYYY-MM-DD'),
    });
  };

  const currentItem = dataSource.find((item) => item.value === value.dateType);
  const onRangeDateChange = (strDates: string[]) => {
    const maxTimeInterval = currentItem?.maxTimeInterval;
    const overcueMsg = currentItem?.overcueMsg;
    if (
      maxTimeInterval &&
      dayjs(strDates[1]).diff(dayjs(strDates[0]), 'day') > maxTimeInterval
    ) {
      Message.error(`${overcueMsg ?? `时间间隔不能超过${maxTimeInterval}天`}`);
      return;
    }
    changeValue({
      ...value,
      startDate: strDates[0],
      endDate: strDates[1],
    });
  };

  // useEffect(() => {
  //   dealInitValue();
  // }, []);
  return (
    <div className={`lz-date-selector ${prefix.direction}`}>
      {prefix.show && (
        <div className={`prefix-box ${prefix?.customClass}`}>
          {prefix?.name ?? '时间'}
          {prefix.hasColon ? ':' : ''}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Select
          dataSource={dealDataSource(dataSource)}
          value={value.dateType}
          onChange={onSelectChange}
          className={`select ${select?.customClass}`}
          {...selectProps}
        />
        {[
          'day',
          'mtd',
          'ytd',
          'custom',
          'last7days',
          'last30days',
          'R3',
          'R6',
          'R12',
        ].includes(value.dateType) && (
          <DatePicker2
            value={value.endDate as string}
            className={`date-picker ${datePicker?.customClass}`}
            onChange={(v) => {
              onDateChange(v as unknown as string);
            }}
            outputFormat={'YYYY-MM-DD'}
            disabledDate={(v, mode) =>
              disabledDate(
                v,
                mode,
                'day',
                dateOffset,
                currentItem?.customDisabledDate,
              )
            }
            hasClear={datePicker?.hasClear}
            {...datePickerProps}
          />
        )}
        {['week'].includes(value.dateType) && (
          <WeekPicker
            value={value.endDate as string}
            className={`date-picker ${datePicker?.customClass}`}
            onChange={(v) => {
              onDateChange(v as unknown as string);
            }}
            outputFormat={'YYYY-MM-DD'}
            disabledDate={(v, mode) =>
              disabledDate(
                v,
                mode,
                'week',
                dateOffset,
                currentItem?.customDisabledDate,
              )
            }
            hasClear={datePicker?.hasClear}
            {...datePickerProps}
          />
        )}
        {['month'].includes(value.dateType) && (
          <MonthPicker
            value={value.endDate as string}
            className={`date-picker ${datePicker?.customClass}`}
            onChange={(v) => {
              onDateChange(v as unknown as string);
            }}
            outputFormat={'YYYY-MM-DD'}
            disabledDate={(v, mode) =>
              disabledDate(
                v,
                mode,
                'month',
                dateOffset,
                currentItem?.customDisabledDate,
              )
            }
            hasClear={datePicker?.hasClear}
            {...datePickerProps}
          />
        )}
        {['year'].includes(value.dateType) && (
          <YearPicker
            value={value.endDate as string}
            className={`date-picker ${datePicker?.customClass}`}
            onChange={(v) => {
              onDateChange(v as unknown as string);
            }}
            outputFormat={'YYYY-MM-DD'}
            disabledDate={(v, mode) =>
              disabledDate(
                v,
                mode,
                'year',
                dateOffset,
                currentItem?.customDisabledDate,
              )
            }
            hasClear={datePicker?.hasClear}
            {...datePickerProps}
          />
        )}
        {[
          'day-range',
          'week-range',
          'month-range',
          'year-range',
          'custom-range',
          'P1M',
          'P3M',
          'P6M',
          'P12M',
        ].includes(value.dateType) && (
          <RangePicker
            value={[value.startDate, value.endDate]}
            className={`date-picker ${datePicker?.customClass}`}
            onChange={(v) => {
              onRangeDateChange(v as unknown as string[]);
            }}
            outputFormat={'YYYY-MM-DD'}
            mode={(() => {
              if (['day', 'custom'].includes(value.dateType.split('-')[0])) {
                return 'date';
              }
              if (['P1M', 'P3M', 'P6M', 'P12M'].includes(value.dateType)) {
                return 'month';
              }
              return value.dateType.split('-')[0] as 'month' | 'year' | 'week';
            })()}
            disabledDate={(v, mode) =>
              disabledDate(
                v,
                mode,
                (() => {
                  if (
                    ['day', 'custom'].includes(value.dateType.split('-')[0])
                  ) {
                    return 'day';
                  }
                  if (['P1M', 'P3M', 'P6M', 'P12M'].includes(value.dateType)) {
                    return 'month';
                  }
                  return value.dateType.split('-')[0] as
                    | 'month'
                    | 'year'
                    | 'week';
                })(),
                dateOffset,
                currentItem?.customDisabledDate,
              )
            }
            hasClear={datePicker?.hasClear}
            {...datePickerProps}
          />
        )}
        {searchResetGroup.show && (
          <SearchResetGroup
            {...searchResetGroup}
            onSearch={onInnerSearch}
            onReset={onInnerReset}
          />
        )}
      </div>
    </div>
  );
};

export default DateSelector;
