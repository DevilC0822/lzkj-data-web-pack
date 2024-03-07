/**
 * title: 节点交互
 * description: 利用nodePropsTransfer将属性传递到节点上实现与节点的交互
 */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { FlowChart, type IFlowChartDataSource as IDataSource } from 'lzkj-data-web-pack';

const idMap: { [propsName: string]: { hide: string[], out?: string[] } } = {
  '-1': {
    hide: ['2-5'],
    out: ['2-1', '2-2', '2-3', '2-4'],
  },
  12: {
    hide: [],
    out: ['2-1', '2-2', '2-3', '2-4', '2-5'],
  },
  1: {
    hide: ['2-1'],
    out: ['2-2', '2-3', '2-4', '2-5'],
  },
  2: {
    hide: ['2-1', '2-2'],
    out: ['2-3', '2-4', '2-5'],
  },
  3: {
    hide: ['2-1', '2-2', '2-3'],
    out: ['2-4', '2-5'],
  },
  4: {
    hide: ['2-1', '2-2', '2-3'],
    out: ['2-4', '2-5'],
  },
};
const firstRowId = Object.keys(idMap).map((key) => String(key));

export default () => {
  const [dataSource, setDataSource] = React.useState<IDataSource[]>([
    {
      id: '-1',
      name: '新增',
      tips: '统计时间内的新增会员数量',
      position: {
        top: 0,
        left: 0,
      },
      out: ['2-1', '2-2', '2-3', '2-4'],
      isChecked: true,
      nodePropsTransfer: {
        onClick: () => blockClick('-1'),
      },
      customStyle: {
        cursor: 'pointer',
      },
    },
    {
      id: '12',
      name: '认知、吸引期',
      tips: '注册会员且历史未购',
      position: {
        left: 260,
        top: 0,
      },
      nodePropsTransfer: {
        onClick: () => blockClick('12'),
      },
      customStyle: {
        cursor: 'pointer',
      },
    },
    {
      id: '1',
      name: '引入期',
      tips: '会员首次购买发生在距截止时间180天内，且至截止时间只购买过1单',
      position: {
        left: 520,
        top: 0,
      },
      nodePropsTransfer: {
        onClick: () => blockClick('1'),
      },
      customStyle: {
        cursor: 'pointer',
      },
    },
    {
      id: '2',
      name: '成长期',
      tips: '会员距截止时间180天内，1单≤购买次数≤3单，且距截止时间 180天 购买次数≥距今180-365天购买次数',
      position: {
        left: 780,
        top: 0,
      },
      nodePropsTransfer: {
        onClick: () => blockClick('2'),
      },
      customStyle: {
        cursor: 'pointer',
      },
    },
    {
      id: '3',
      name: '成熟期',
      tips: '会员距截止时间180天内，购买次数≥3单',
      position: {
        top: 0,
        left: 1040,
      },
      nodePropsTransfer: {
        onClick: () => blockClick('3'),
      },
      customStyle: {
        cursor: 'pointer',
      },
    },
    {
      id: '4',
      name: '衰退、流失期',
      tips: '会员距截止时间180天内，1单≤购买次数≤3单，且距截止时间 180天 购买次数<距今180-365天购买次数',
      position: {
        top: 0,
        left: 1300,
      },
      nodePropsTransfer: {
        onClick: () => blockClick('4'),
      },
      customStyle: {
        cursor: 'pointer',
      },
    },
    {
      id: '2-1',
      name: '流转人数',
      tips: '在选定的时间内，由原生命周期流转至现生命周期的人数。',
      position: {
        left: 260,
        top: 154,
      },
      out: ['3-1'],
    },
    {
      id: '2-2',
      name: '流转人数',
      tips: '在选定的时间内，由原生命周期流转至现生命周期的人数。',
      position: {
        left: 520,
        top: 154,
      },
      out: ['3-2'],
    },
    {
      id: '2-3',
      name: '流转人数',
      tips: '在选定的时间内，由原生命周期流转至现生命周期的人数。',
      position: {
        left: 780,
        top: 154,
      },
      out: ['3-3'],
    },
    {
      id: '2-4',
      name: '流转人数',
      tips: '在选定的时间内，由原生命周期流转至现生命周期的人数。',
      position: {
        left: 1040,
        top: 154,
      },
      out: ['3-4'],
    },
    {
      id: '2-5',
      name: '流转人数',
      tips: '在选定的时间内，由原生命周期流转至现生命周期的人数。',
      isShow: false,
      position: {
        left: 1300,
        top: 154,
      },
    },
    {
      id: '3-1',
      name: '认知、吸引期',
      tips: '注册会员且历史未购',
      position: {
        top: 308,
        left: 260,
      },
    },
    {
      id: '3-2',
      name: '引入期',
      tips: '会员首次购买发生在距截止时间180天内，且至截止时间只购买过1单',
      position: {
        left: 520,
        top: 308,
      },
    },
    {
      id: '3-3',
      name: '成长期',
      tips: '会员距截止时间180天内，1单≤购买次数≤3单，且距截止时间 180天 购买次数≥距今180-365天购买次数',
      position: {
        left: 780,
        top: 308,
      },
    },
    {
      id: '3-4',
      name: '成熟期',
      tips: '会员距截止时间180天内，购买次数≥3单',
      position: {
        left: 1040,
        top: 308,
      },
    },
    {
      id: '3-5',
      name: '衰退、流失期',
      tips: '会员距截止时间180天内，1单≤购买次数≤3单，且距截止时间 180天 购买次数<距今180-365天购买次数',
      position: {
        left: 1300,
        top: 308,
      },
    },
  ]);

  const blockClick = (id: string) => {
    const hide = idMap[id].hide;
    const newDataSource = dataSource.map((item) => {
      if (hide.includes(item.id as string)) {
        return {
          ...item,
          isShow: false,
          out: [],
        };
      }
      return {
        ...item,
        isShow: true,
      };
    });
    newDataSource.forEach((item) => {
      if (item.isChecked) {
        item.isChecked = false;
      }
      // 清空第一行id的out
      if (firstRowId.includes(item.id as string)) {
        item.out = [];
      }
      // 设置第一行选中的节点的out
      if (item.id === id) {
        item.out = idMap[id].out;
      }
    });
    newDataSource.find((item) => item.id === id)!.isChecked = true;
    setDataSource(newDataSource);
  };
  return <FlowChart width={1542} height={404} dataSource={dataSource} nodeWidth={240} nodeHeight={94} />;
};