import React, { type FC } from 'react';
import { Form, Grid, Input, Select, NumberPicker, DatePicker2 } from '@alifd/next';
import '@alifd/next/lib/form/style';
import '@alifd/next/lib/grid';
import '@alifd/next/lib/input/style';
import dayjs, { Dayjs } from 'dayjs';
import SearchResetGroup from '../SearchResetGroup';
import { IQueryConditionsList } from './types';
import './index.scss';

const { Row, Col } = Grid;
const { RangePicker } = DatePicker2;

interface IProps {
  isBtnLastSide?: boolean
  queryConditionsList: IQueryConditionsList[]
  searchResetGroupProps?: object
  onSearch?: (v: any) => void
  onReset?: () => void
  customOperateBtn?: React.ReactNode | null
  labelAlign?: 'top' | 'left'
  labelCol?: object
  wrapperCol?: object
}

const disabledDate = (date: Dayjs, view: string) => {
  if (view === 'date') {
    return date.valueOf() >= dayjs().subtract(1, 'day').valueOf();
  }
  return false;
};

const BasicQueryForm: FC<IProps> = (props) => {
  const { 
    isBtnLastSide = true,
    queryConditionsList = [],
    searchResetGroupProps = {},
    onSearch = () => {},
    onReset = () => {},
    customOperateBtn = null,
    labelAlign = 'left',
    labelCol = {
      fixedSpan: 4,
    },
    wrapperCol = {
      span: 18,
    },
  } = props;

  const onInnerSearch = (v: any) => {
    onSearch(v);
  };
  const onInnerReset = () => {
    onReset();
  };
  return (
    <div className='basic-query-form'>
      <Form className="query-form" inline>
        <Row wrap gutter="20">
          {
            queryConditionsList.map((item) => {
              return (
                <Col span={item?.span ?? 6} fixedSpan={item.fixedSpan} key={item.name}>
                  <Form.Item label={item.label} labelAlign={labelAlign} labelCol={item?.labelCol ?? labelCol} wrapperCol={item?.wrapperCol ?? wrapperCol}>
                    {
                      item.type === 'input' && <Input name={item.name} {...item.propsTransfer} />
                    }
                    {
                      item.type === 'input-number' && <NumberPicker
                        name={item.name}
                        // @ts-ignore
                        maxLength={20}
                        showLimitHint
                        stringMode
                        hasTrigger={false}
                        {...item.propsTransfer}
                      />
                    }
                    {
                      item.type === 'select' && <Select
                        name={item.name}
                        placeholder={`请选择${item.label}`}
                        style={{ width: '100%' }}
                        followTrigger
                        {...item.propsTransfer}
                      />
                    }
                    {
                      item.type === 'autoComplete' && <Select.AutoComplete
                        name={item.name}
                        placeholder={`请输入${item.label}关键字`}
                        autoHighlightFirstItem={false}
                        maxLength={30}
                        showLimitHint
                        filterLocal
                        useVirtual
                        followTrigger
                        fillProps='label'
                        {...item.propsTransfer}
                      />
                    }
                    {
                      item.type === 'rangePicker' && <RangePicker
                        name={item.name}
                        placeholder={['开始时间', '结束时间']}
                        disabledDate={disabledDate}
                        {...item.propsTransfer}
                      />
                    }
                  </Form.Item>
                </Col>
              );
            })
          }
          <Col>
            <Form.Item label="&nbsp;" labelAlign={labelAlign}>
              <div className='operate-box'>
                <SearchResetGroup isFormType onSearch={onInnerSearch} onReset={onInnerReset} customStyle={{ justifyContent: isBtnLastSide ? 'start' : 'end' }} {...searchResetGroupProps} />
                {
                  customOperateBtn && <div className='custom-operate-btn'>{customOperateBtn}</div>
                }
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BasicQueryForm;