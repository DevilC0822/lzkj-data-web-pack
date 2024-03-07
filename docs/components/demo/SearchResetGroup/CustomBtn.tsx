/**
 * title: 自定义按钮名称、样式
 * description: 可以通过search和reset来自定义按钮名称，通过isShowIcon来控制是否显示icon以及通过customStyle来自定义按钮样式和customClass自定义类名
 */

import React from 'react';
import { SearchResetGroup } from 'lzkj-data-web-pack';

const searchConfig = {
  name: '自定义查询按钮名称且不显示icon',
  isShowIcon: false,
  customStyle: {
    marginRight: 200,
  }
};
const resetConfig = {
  name: '自定义重置按钮名称且显示icon',
  isTextBtn: false,
};

export default () => {
  const onSearch = () => {
    console.log('查询');
  };
  const onReset = () => {
    console.log('重置');
  };
  return <SearchResetGroup search={searchConfig} reset={resetConfig} onSearch={onSearch} onReset={onReset} />;
};