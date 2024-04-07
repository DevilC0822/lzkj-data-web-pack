/**
 * title: 自定义禁止日期函数
 * description: 通过customDisabledDate可以自定义禁止日期函数
 */

import { Dayjs } from 'dayjs';
import type { IDateSelectorDataSource as IDataSource } from 'lzkj-data-web-pack';
import { DateSelector } from 'lzkj-data-web-pack';
import React, { useState } from 'react';

const dataSource: IDataSource[] = [
  {
    name: '自然日',
    value: 'day',
    customDisabledDate: (v: Dayjs, mode: string) => {
      console.log(v, mode);
      return false;
    },
  },
  {
    name: '自然周',
    value: 'week',
    customDisabledDate: (v: Dayjs, mode: string) => {
      console.log(v, mode);
      return false;
    },
  },
  {
    name: '自然月',
    value: 'month',
    customDisabledDate: (v: Dayjs, mode: string) => {
      console.log(v, mode);
      return false;
    },
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
