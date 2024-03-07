/**
 * title: 额外内容渲染
 * description: 使用extra可以在图表中渲染额外的内容，例如一些符号，或者其他的内容
 */

import React from 'react';
import { Icon } from '@alifd/next';
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
const extra = [
  {
    content: '=',
    position: {
      top: 50,
      left: 390,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: '+',
    position: {
      top: 50,
      left: 815,
    },
    customStyle: {
      color: '#1a92fa',
      fontSize: 24,
      fontWeight: 600,
    }
  },
  {
    content: <div style={{ color: '#1a92fa' }}>
    <span>这是一段可以放到任何位置、任何内容的jsx代码</span>    <Icon type="dashboard" />
    <p>使用它你可以在画布上渲染任何内容</p>
    </div>,
    position: {
      top: 336,
      left: 20,
    },
  },
];

export default () => {
  return <FlowChart width={1640} height={531} extra={extra} dataSource={dataSource} nodeWidth={365} nodeHeight={135}/>;
};