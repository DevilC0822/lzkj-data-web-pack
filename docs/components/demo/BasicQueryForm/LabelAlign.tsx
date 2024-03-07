/**
 * title: 标签对齐方式
 */

import React from 'react';
import { BasicQueryForm, type IQueryConditionsList } from 'lzkj-data-web-pack';

const testQueryConditionsListData: IQueryConditionsList[] = [
  {
    type: 'input',
    label: '会员ID',
    name: 'id',
    propsTransfer: {
      placeholder: '请输入会员ID',
      name: 'id',
    },
  },
  {
    type: 'input-number',
    label: '手机号',
    name: 'phone',
    propsTransfer: {
      placeholder: '请输入手机号',
    },
  },
  {
    type: 'autoComplete',
    label: '发放组织',
    name: 'org',
    propsTransfer: {
      dataSource: [
        {
          label: '发放组织1',
          value: '1',
        },
        {
          label: '发放组织2',
          value: '2',
        },
        {
          label: '发放组织3',
          value: '3',
        },
      ],
    }
  },
  {
    type: 'autoComplete',
    label: '成本归属',
    name: 'cost',
    propsTransfer: {
      dataSource: [
        {
          label: '成本归属1',
          value: '1',
        },
        {
          label: '成本归属2',
          value: '2',
        },
        {
          label: '成本归属3',
          value: '3',
        },
      ],
    }
  },
  {
    type: 'autoComplete',
    label: '业务类型',
    name: 'business',
    propsTransfer: {
      dataSource: [
        {
          label: '业余类型1',
          value: '1',
        },
        {
          label: '业余类型2',
          value: '2',
        },
        {
          label: '业余类型3',
          value: '3',
        },
      ],
    }
  },
  {
    type: 'select',
    label: '发放方式',
    name: 'grantType',
    propsTransfer: {
      dataSource: [
        {
          label: '发放方式1',
          value: '1',
        },
        {
          label: '发放方式2',
          value: '2',
        },
        {
          label: '发放方式3',
          value: '3',
        },
      ],
    }
  },
  {
    type: 'rangePicker',
    label: '发放时间',
    name: 'grantDate',
  },
  {
    type: 'rangePicker',
    label: '到期时间',
    name: 'expireDate',
  },
  {
    type: 'rangePicker',
    label: '追回时间',
    name: 'recoveryDate',
  },
];

export default () => {
  const onSearch = (v: unknown) => {
    console.log(v);
  };
  return <BasicQueryForm labelAlign='top' queryConditionsList={testQueryConditionsListData} onSearch={onSearch} />;
};
