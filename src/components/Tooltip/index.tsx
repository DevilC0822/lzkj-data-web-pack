import React, { type FC } from 'react';
import './index.scss';

interface IProps {
  tips: (string | React.JSX.Element)[]
  customIcon?: React.JSX.Element
}

const Tooltip: FC<IProps> = (props) => {
  const { tips, customIcon, ...otherProps } = props;

  return (
    <div className='Tooltip-box' {...otherProps}>
      <div style={{ display: 'flex' }}>
        {
          customIcon ? customIcon : <span className='iconfont icon-a-fill29 icon'></span>
        }
        <div className='content-box'>{
          tips && tips.map((item, index) => <div key={index}>
            {item}
          </div>)
        }</div>
      </div>
    </div>
  );
};

export default Tooltip;