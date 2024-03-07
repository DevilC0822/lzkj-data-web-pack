/**
 * title: 时间偏移量
 * description: 通过dateOffset可以设置时间偏移量，可以设置正负值，正值表示向后偏移，负值表示向前偏移
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

const dateOffset = -7;

export default () => {
  const [value, setValue] = useState({
    dateType: '',
    startDate: '',
    endDate: '',
  });
  const onSearch = () => {
    console.log(value);
  };
  return <DateSelectorSearch dateOffset={dateOffset} value={value} changeValue={setValue} dataSource={dataSource} onSearch={onSearch} />;
};