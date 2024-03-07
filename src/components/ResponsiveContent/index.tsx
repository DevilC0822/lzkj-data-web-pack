import React, { type FC, useEffect, useLayoutEffect, useState, useRef } from 'react';
import './index.scss';

interface IProps {
  width: number
  height: number
  style?: React.CSSProperties
}

const ResponsiveContent: FC<IProps> = (props) => {
  const {
    children,
    width,
    height,
    style,
    ...otherProps
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperSize, setWrapperSize] = useState({
    width: 0,
    height: 0,
  });
  const resize = () => {
    if (!wrapperRef.current) {
      return;
    }
    setWrapperSize({
      width: wrapperRef.current.clientWidth,
      height: height * wrapperRef.current.clientWidth / width
    });
  };
  useEffect(() => {
    window.addEventListener('resize', () => resize());
  }, []);
  useLayoutEffect(() => {
    resize();
  }, []);
  return <div {...otherProps} ref={wrapperRef} className="wrapper" style={{
    ...style,
    height: wrapperSize.height,
  }}>
    <div className="content" style={{
      transform: `scale(${wrapperSize.width / width})`,
      width,
      height,
    }}>
      {children}
    </div>
  </div>;
};

export default ResponsiveContent;