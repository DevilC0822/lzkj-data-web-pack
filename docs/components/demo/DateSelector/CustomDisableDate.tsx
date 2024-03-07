/**
 * title: 自定义禁止日期函数
 * description: 通过customDisabledDate可以自定义禁止日期函数
 */

import React, { useState } from 'react';
import { DateSelectorSearch } from 'lzkj-data-web-pack';
import { Dayjs } from 'dayjs';
import type { IDateSelectorSearchDataSource as IDataSource } from 'lzkj-data-web-pack';

const dataSource: IDataSource[] = [
  {
    name: '自然日',
    value: 'day',
    customDisabledDate: (v: Dayjs, mode: string) => {
      console.log(v, mode);
      return false;
    }
  },
  {
    name: '自然周',
    value: 'week',
    customDisabledDate: (v: Dayjs, mode: string) => {
      console.log(v, mode);
      return false;
    }
  },
  {
    name: '自然月',
    value: 'month',
    customDisabledDate: (v: Dayjs, mode: string) => {
      console.log(v, mode);
      return false;
    }
  },
];

export default () => {
  const [value, setValue] = useState({
    dateType: '',
    startDate: '',
    endDate: '',
  });
  const onSearch = () => {
    console.log(value);
  };
  return <DateSelectorSearch value={value} changeValue={setValue} dataSource={dataSource} onSearch={onSearch} />;
};