/**
 * title: 最大可选时间长度限制
 * description: 通过maxTimeInterval可以限制最大可选时间长度并且可以通过overcueMsg 自定义溢出提示的信息
 */

import type { IDateSelectorDataSource as IDataSource } from 'lzkj-data-web-pack';
import { DateSelector } from 'lzkj-data-web-pack';
import React, { useState } from 'react';

const dataSource: IDataSource[] = [
  {
    name: '自然日-范围',
    value: 'day-range',
    maxTimeInterval: 7,
  },
  {
    name: '自然周-范围',
    value: 'week-range',
    maxTimeInterval: 14,
    overcueMsg: '时间选择不能超过两周',
  },
  {
    name: '自然月-范围',
    value: 'month-range',
    maxTimeInterval: 60,
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
