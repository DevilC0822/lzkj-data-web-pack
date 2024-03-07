/**
 * title: 自定义Icon
 * description: 可以通过传入jsx元素来自定义icon
 */

import React from 'react';
import { Tooltip } from 'lzkj-data-web-pack';

const tips = [
  '我是第一行的字符串',
  '我是第二行的字符串',
];

const customIcon = <span className='iconfont icon-icon4-37' style={{ marginRight: 8 }} />;

export default () => {
  return <Tooltip tips={tips} customIcon={customIcon} />;
};