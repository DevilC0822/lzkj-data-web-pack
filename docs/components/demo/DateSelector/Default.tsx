/**
 * title: 默认
 */

import type { IDateSelectorDataSource as IDataSource } from 'lzkj-data-web-pack';
import { DateSelector } from 'lzkj-data-web-pack';
import React, { useState } from 'react';

const dataSource: IDataSource[] = [
  {
    name: 'P1M',
    value: 'P1M',
  },
  {
    name: 'P3M',
    value: 'P3M',
  },
  {
    name: 'P6M',
    value: 'P6M',
  },
  {
    name: 'P12M',
    value: 'P12M',
  },
  {
    name: '最近7天',
    value: 'last7days',
  },
  {
    name: '最近30天',
    value: 'last30days',
  },
  {
    name: 'R3',
    value: 'R3',
  },
  {
    name: 'R6',
    value: 'R6',
  },
  {
    name: 'R12',
    value: 'R12',
  },
  {
    name: 'YTD',
    value: 'ytd',
  },
  {
    name: 'MTD',
    value: 'mtd',
  },
  {
    name: '自定义',
    value: 'custom',
  },
  {
    name: '自定义范围',
    value: 'custom-range',
  },
  {
    name: '自然日',
    value: 'day',
  },
  {
    name: '自然周',
    value: 'week',
  },
  {
    name: '自然月',
    value: 'month',
  },
  {
    name: '自然年',
    value: 'year',
  },
  {
    name: '自然日范围',
    value: 'day-range',
  },
  {
    name: '自然周范围',
    value: 'week-range',
  },
  {
    name: '自然月范围',
    value: 'month-range',
  },
  {
    name: '自然年范围',
    value: 'year-range',
  },
];

export default () => {
  const [value, setValue] = useState({
    dateType: dataSource[0].value,
    startDate: '',
    endDate: '',
  });
  const onSearch = () => {
    console.log(value);
  };
  return (
    <DateSelector
      value={value}
      changeValue={setValue}
      dataSource={dataSource}
      onSearch={onSearch}
    />
  );
};
