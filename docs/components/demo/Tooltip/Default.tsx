/**
 * title: 默认
 */

import React from 'react';
import { Tooltip } from 'lzkj-data-web-pack';

const tips = [
  '我是第一行的字符串',
  '我是第二行的字符串',
];

export default () => {
  return <Tooltip tips={tips} />;
};