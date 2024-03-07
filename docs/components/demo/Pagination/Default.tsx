/**
 * title: 默认
 */

import React, { useState } from 'react';
import { Pagination } from 'lzkj-data-web-pack';

export default () => {
  const [pageInfo, setPageInfo] = useState({
    total: 100,
    current: 1,
    size: 10,
  });
  const onChange = (v: { current: number; size: number; total: number }) => {
    setPageInfo({
      ...v,
    });
    console.log(v);
    // 执行具体业务代码请求
  };
  return <Pagination pageInfo={pageInfo} onChange={onChange} />;
};