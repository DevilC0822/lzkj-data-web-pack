import React, { type FC } from 'react';
import { Button, Form } from '@alifd/next';
import '@alifd/next/lib/button/style';
import '@alifd/next/lib/form/style';
import reloadSvg from './icon/reload.svg';
import './index.scss';

interface IProps {
  customClass?: string // 按钮组自定义类名
  customStyle?: object // 按钮组样式
  search?: {
    name?: string
    isShowIcon?: boolean
    customStyle?: object
    customClass?: string
    isTextBtn?: boolean
  }
  reset?: {
    name?: string
    isShowIcon?: boolean
    customStyle?: object
    customClass?: string
    isTextBtn?: boolean
  }
  isFormType?: boolean // 是否是表单类型
  onSearch?: (v: any) => void // 查询按钮回调
  onReset?: () => void // 重置按钮回调
}

const SearchResetGroup: FC<IProps> = (props) => {
  const {
    search = {},
    reset = {},
    customStyle = {},
    customClass = '',
    isFormType = false,
    onSearch = () => { },
    onReset = () => { } } = props;
  return (
    <div className={`lz-search-reset-group ${customClass}`} style={{
      ...customStyle,
    }}>
      {
        !isFormType && <>
          <Button className={search.customClass} onClick={onSearch} style={{ marginRight: 16, ...search?.customStyle }} type="primary" text={search?.isTextBtn ?? false}>
            {
              (search.isShowIcon ?? true) && <span className="iconfont icon-a-16search1" style={{ marginRight: 6 }} />
            }
            {search?.name ?? '查询'}
          </Button>
          <Button className={search.customClass} onClick={onReset} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', ...reset.customStyle }} text={reset?.isTextBtn ?? true}>
            {
              (reset?.isShowIcon ?? true) && <img src={reloadSvg} alt="" style={{ marginRight: 3 }} />
            }
            {reset?.name ?? '重置'}
          </Button>
        </>
      }
      {
        isFormType && <>
          <Form.Submit className={search.customClass} onClick={onSearch} style={{ marginRight: 16, ...search?.customStyle }} type="primary" text={search?.isTextBtn ?? false}>
            {
              (search.isShowIcon ?? true) && <span className="iconfont icon-a-16search1" style={{ marginRight: 6 }} />
            }
            {search?.name ?? '查询'}
          </Form.Submit>
          <Form.Reset className={search.customClass} onClick={onReset} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', ...reset.customStyle }} text={reset?.isTextBtn ?? true}>
            {
              (reset?.isShowIcon ?? true) && <img src={reloadSvg} alt="" style={{ marginRight: 3 }} />
            }
            {reset?.name ?? '重置'}
          </Form.Reset>
        </>
      }
    </div>
  );
};

export default SearchResetGroup;