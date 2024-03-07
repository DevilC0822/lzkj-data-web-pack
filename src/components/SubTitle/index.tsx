import React, { type FC } from 'react';
import { Balloon } from '@alifd/next';
import './index.scss';

interface IProps {
  title: string
  titleTextStyle?: object
  extra?: React.ReactNode
  showIcon?: boolean
  tips?: string
}

const SubTitle: FC<IProps> = (props) => {
  const {
    title = '',
    titleTextStyle = {},
    extra,
    showIcon = true,
    tips = '',
    ...otherProps
  } = props;
  return (
    <div className={`sub-title-box`} {...otherProps}>
      {
        showIcon && <div className={'icon'}></div>
      }
      <div className={'text'} style={titleTextStyle}>{title}</div>
      {
        tips &&
        <Balloon
          align="t"
          trigger={
            <span className={`iconfont icon-icon4-34 tips-icon`}></span>
          }
          closable={false}>
          <div style={{ lineHeight: '20px' }}>
            {tips}
          </div>
        </Balloon>
      }
      {
        extra && <div className={'extra-box'}>{extra}</div>
      }
    </div>
  );
};

export default SubTitle;