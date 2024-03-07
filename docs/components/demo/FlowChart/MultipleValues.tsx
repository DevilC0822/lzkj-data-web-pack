/**
 * title: 展示多个值
 * description: 一个节点展示多个值，只需要在data中传入多个值即可
 */

import React from 'react';
import { FlowChart } from 'lzkj-data-web-pack';

const dataSource = [
  {
    id: 1,
    name: 'GMV',
    tips: '会员产生的有效订单成交金额，GMV自营店计算使用页面价（不含满减等促销折扣，运费，服务费，税费等）。POP店使用用户应付金额（应付款=货款-用户优惠-余额+运费+税费+服务费）',
    subTitle: <p>这是一段示例jsx代码</p>,
    height: 150,
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
        value: 0,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
      },
      {
        customContent: <>
          <div>自定义内容, 可以是jsx元素，可以是任何内容</div>
          <p>位置支持order排序（升序）</p>
        </>,
        order: -1,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
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
        isShowFloatArrow: true,
      },
      {
        name: '同比',
        value: -0.1234,
        isRatio: true,
        digit: 2,
        isShowFloatArrow: true,
      }
    ]
  },
];

export default () => {
  return <FlowChart width={1640} height={531} dataSource={dataSource} nodeWidth={365} nodeHeight={135} />;
};