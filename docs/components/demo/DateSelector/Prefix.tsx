/**
 * title: 前缀标识
 * description: 可以修改前缀标识的样式
 */

import React, { useState } from 'react';
import { DateSelectorSearch } from 'lzkj-data-web-pack';
import type { IDateSelectorSearchDataSource as IDataSource } from 'lzkj-data-web-pack';

const dataSource: IDataSource[] = [
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
];

const prefix = {
  name: '我是时间前缀',
  direction: 'top' as 'top',
  hasColon: false,
};

export default () => {
  const [value, setValue] = useState({
    dateType: '',
    startDate: '',
    endDate: '',
  });
  const onSearch = () => {
    console.log(value);
  };
  return <DateSelectorSearch prefix={prefix} value={value} changeValue={setValue} dataSource={dataSource} onSearch={onSearch} />;
};