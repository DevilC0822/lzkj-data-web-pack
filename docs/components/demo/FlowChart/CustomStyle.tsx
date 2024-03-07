/**
 * title: 自定义样式
 * description: 每个节点都可以自定义样式，只需传入customStyle即可，支持所有css样式，也可以传入customClass自定义类名
 */

import React from 'react';
import { FlowChart } from 'lzkj-data-web-pack';

const getRandomColor = (transparency: number) => {
  const random = () => Math.floor(Math.random() * 256);
  return `rgba(${random()},${random()},${random()}, ${transparency})`;
};

const dataSource = [
  {
    id: 1,
    name: 'GMV',
    tips: '会员产生的有效订单成交金额，GMV自营店计算使用页面价（不含满减等促销折扣，运费，服务费，税费等）。POP店使用用户应付金额（应付款=货款-用户优惠-余额+运费+税费+服务费）',
    customStyle: {
      backgroundColor: getRandomColor(0.1),
      color: getRandomColor(1),
    },
    position: {
      top: 0,
      left: 0,
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 2,
    name: '新客GMV',
    tips: '查询时间范围内，会员且历史新客产生的GMV',
    out: [4, 5],
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 425,
      top: 0
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 3,
    name: '老客GMV',
    tips: '查询时间范围内，会员且历史老客产生的GMV',
    out: [6, 7],
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 850,
      top: 0
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 4,
    name: '新客订单人数',
    tips: '查询时间范围内，会员且历史新客的人数，该时间段内去重',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 0,
      top: 197
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 5,
    name: '新客客单价',
    tips: '会员新客GMV/会员新客数',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 425,
      top: 197
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 6,
    name: '老客订单人数',
    tips: '查询时间范围内，会员且历史老客的人数，该时间段内去重',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 850,
      top: 197
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 7,
    name: '老客客单价',
    tips: '会员老客GMV/会员老客数',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 1275,
      top: 197
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 8,
    name: '新客订单单数',
    tips: '查询时间范围内，会员且历史新客产生的有效订单单数',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 0,
      top: 394
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 9,
    name: '新客笔单价',
    tips: '会员新客GMV/会员新客订单单数',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 425,
      top: 394
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 10,
    name: '老客订单单数',
    tips: '查询时间范围内，会员且历史老客产生的有效订单单数',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 850,
      top: 394
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
  {
    id: 11,
    name: '老客笔单价',
    tips: '会员新客GMV/会员老客订单单数',
    customStyle: {
      backgroundColor: getRandomColor(0.3),
      color: getRandomColor(1),
    },
    position: {
      left: 1275,
      top: 394
    },
    data: [
      {
        value: 1234,
      },
      {
        name: '环比',
        value: 0.1234,
        isRatio: true,
        digit: 2,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
      }
    ]
  },
];

export default () => {
  return <FlowChart width={1640} height={531} dataSource={dataSource} nodeWidth={365} nodeHeight={135} />;
};