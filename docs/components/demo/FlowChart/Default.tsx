/**
 * title: 默认
 * description: 一切都是默认的，只需要传入数据源中的必填项即可
 */

import React from 'react';
import { FlowChart } from 'lzkj-data-web-pack';

const dataSource = [
  {
    id: 1,
    name: 'GMV',
    tips: '会员产生的有效订单成交金额，GMV自营店计算使用页面价（不含满减等促销折扣，运费，服务费，税费等）。POP店使用用户应付金额（应付款=货款-用户优惠-余额+运费+税费+服务费）',
    position: {
      top: 0,
      left: 0,
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 2,
    name: '新客GMV',
    tips: '查询时间范围内，会员且历史新客产生的GMV',
    out: [4, 5],
    position: {
      left: 260,
      top: 0
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 3,
    name: '老客GMV',
    tips: '查询时间范围内，会员且历史老客产生的GMV',
    out: [6, 7],
    position: {
      left: 520,
      top: 0
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 4,
    name: '新客订单人数',
    tips: '查询时间范围内，会员且历史新客的人数，该时间段内去重',
    position: {
      left: 0,
      top: 135
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 5,
    name: '新客客单价',
    tips: '会员新客GMV/会员新客数',
    position: {
      left: 260,
      top: 135
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 6,
    name: '老客订单人数',
    tips: '查询时间范围内，会员且历史老客的人数，该时间段内去重',
    position: {
      left: 520,
      top: 135
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 7,
    name: '老客客单价',
    tips: '会员老客GMV/会员老客数',
    position: {
      left: 780,
      top: 135
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 8,
    name: '新客订单单数',
    tips: '查询时间范围内，会员且历史新客产生的有效订单单数',
    position: {
      left: 0,
      top: 270
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 9,
    name: '新客笔单价',
    tips: '会员新客GMV/会员新客订单单数',
    position: {
      left: 260,
      top: 270
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 10,
    name: '老客订单单数',
    tips: '查询时间范围内，会员且历史老客产生的有效订单单数',
    position: {
      left: 520,
      top: 270
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
  {
    id: 11,
    name: '老客笔单价',
    tips: '会员新客GMV/会员老客订单单数',
    position: {
      left: 780,
      top: 270
    },
    data: [
      {
        value: 1234,
      },
    ]
  },
];

export default () => {
  return <FlowChart width={982} height={358} dataSource={dataSource} />;
};