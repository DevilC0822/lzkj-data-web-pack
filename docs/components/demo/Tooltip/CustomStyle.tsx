/**
 * title: 自定义样式
 * description: 可以通过传入jsx元素来自定义样式
 */

import React from 'react';
import { Tooltip } from 'lzkj-data-web-pack';

const tips = [
  '我是第一行的字符串',
  <p style={{ fontSize: 24, margin: '8px 0' }}>我是第二行的<span style={{ color: 'red' }}>jsx</span></p>,
  <span>我是第三行的<span style={{ color: 'red' }}>jsx</span></span>,
];

export default () => {
  return <Tooltip tips={tips} />;
};