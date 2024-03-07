/**
 * title: 额外内容
 * description: 可以在标题后面添加额外的内容
 */

import React from 'react';
import dayjs from 'dayjs';
import { SubTitle } from 'lzkj-data-web-pack';

const extra = (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className='iconfont icon-icon4-37' style={{ marginRight: 8, fontSize: 14 }}></span>
    数据更新时间：{dayjs().startOf('day').format('YYYY-MM-DD HH:mm:ss')}
  </div>
);

export default () => {
  return <SubTitle title='我是title' extra={extra} />;
};