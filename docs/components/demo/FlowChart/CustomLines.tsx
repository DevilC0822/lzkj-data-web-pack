/**
 * title: 绘制自定义连线
 * description: 使用customLines可以自定义连线，支持多段连线，每段连线可以自定义起始点和终点
 */

import React from 'react';
import { FlowChart } from 'lzkj-data-web-pack';

const dataSource = [
  {
    id: 1,
    name: 'GMV',
    tips: '时间范围内，普通订单的成交金额',
    position: {
      top: 68,
      left: 0,
    },
  },
  {
    id: 2,
    name: '订单数',
    tips: '时间范围内，普通订单的成交订单数',
    position: {
      top: 0,
      left: 300,
    },
  },
  {
    id: 3,
    name: '笔单价',
    tips: 'GMV/订单数',
    position: {
      top: 0,
      left: 600,
    },
  },
  {
    id: 4,
    name: '购买人数',
    tips: '时间范围内，普通订单的成交人数，去重',
    position: {
      top: 134,
      left: 300,
    },
  },
  {
    id: 5,
    name: '客单价',
    tips: 'GMV/成交人数',
    position: {
      top: 134,
      left: 600,
    },
  },
  {
    id: 6,
    name: '新客GMV',
    tips: '时间范围内，店铺历史新客产生的普通订单的成交金额',
    position: {
      top: 312,
      left: 0,
    },
  },
  {
    id: 7,
    name: '新客',
    tips: '时间范围内，店铺历史新客产生的普通订单的成交人数，去重',
    width: 236,
    position: {
      top: 446,
      left: 30,
    },
  },
  {
    id: 8,
    name: '新客客单价',
    tips: '新客GMV/新客',
    width: 236,
    position: {
      top: 446,
      left: 300,
    },
  },
  {
    id: 9,
    name: '新客订单数',
    tips: '时间范围内，店铺历史新客产生的普通订单的订单笔数',
    width: 236,
    position: {
      top: 580,
      left: 30,
    },
  },
  {
    id: 10,
    name: '新客笔单价',
    tips: '新客GMV/新客订单数',
    width: 236,
    position: {
      top: 580,
      left: 300,
    },
  },
  {
    id: 11,
    name: '老客GMV',
    tips: '时间范围内，店铺历史老客产生的普通订单的成交金额',
    position: {
      top: 312,
      left: 600,
    },
  },
  {
    id: 12,
    name: '老客',
    tips: '时间范围内，店铺历史老客产生的普通订单的成交人数，去重',
    width: 236,
    position: {
      top: 446,
      left: 630,
    },
  },
  {
    id: 13,
    name: '老客客单价',
    tips: '老客GMV/老客',
    width: 236,
    position: {
      top: 446,
      left: 900,
    },
  },
  {
    id: 14,
    name: '老客订单数',
    tips: '时间范围内，店铺历史老客产生的普通订单的订单笔数',
    width: 236,
    position: {
      top: 580,
      left: 630,
    },
  },
  {
    id: 15,
    name: '老客笔单价',
    tips: '老客GMV/老客订单数',
    width: 236,
    position: {
      top: 580,
      left: 900,
    },
  },
];

const extra = [
  {
    content: '=',
    position: {
      top: 100,
      left: 278,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '×',
    position: {
      top: 35,
      left: 578,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '×',
    position: {
      top: 168,
      left: 578,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '×',
    position: {
      top: 480,
      left: 278,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '×',
    position: {
      top: 615,
      left: 278,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '×',
    position: {
      top: 480,
      left: 878,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '×',
    position: {
      top: 615,
      left: 878,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
];
const customLines = [
  [
    {
      x: 132,
      y: 162,
    },
    {
      x: 132,
      y: 312,
    },
  ],
  [
    {
      x: 132,
      y: 267,
    },
    {
      x: 732,
      y: 267,
    },
    {
      x: 732,
      y: 312,
    },
  ],
  [
    {
      x: 15,
      y: 406,
    },
    {
      x: 15,
      y: 493,
    },
    {
      x: 30,
      y: 493,
    },
  ],
  [
    {
      x: 15,
      y: 493,
    },
    {
      x: 15,
      y: 627,
    },
    {
      x: 30,
      y: 627,
    },
  ],
  [
    {
      x: 615,
      y: 406,
    },
    {
      x: 615,
      y: 493,
    },
    {
      x: 630,
      y: 493,
    },
  ],
  [
    {
      x: 615,
      y: 493,
    },
    {
      x: 615,
      y: 627,
    },
    {
      x: 630,
      y: 627,
    },
  ],
];

export default () => {
  return <FlowChart width={1168} height={700} extra={extra} customLines={customLines} dataSource={dataSource} nodeWidth={265} nodeHeight={94} />;
};