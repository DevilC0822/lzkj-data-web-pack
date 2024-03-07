/**
 * title: 默认
 */

import React from 'react';
import { SearchResetGroup } from 'lzkj-data-web-pack';

export default () => {
  const onSearch = () => {
    console.log('查询');
  };
  const onReset = () => {
    console.log('重置');
  };
  return <SearchResetGroup onSearch={onSearch} onReset={onReset} />;
};