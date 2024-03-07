import React from 'react';
import { Balloon } from '@alifd/next';

const { Tooltip } = Balloon;


const formatNum = (num: any, isRatio = false, digit = 0, errorSymbol = '-') => {
  const newNum = Number(num);
  if (num === null || num === undefined) {
    return errorSymbol;
  }
  if (isRatio && newNum === 0) {
    return '0%';
  }
  if (isRatio && newNum === 1) {
    return '100%';
  }
  if (isRatio) {
    return `${(newNum * 100).toFixed(digit)}%`;
  }
  if (newNum === 0) {
    return 0;
  }
  return newNum.toFixed(2) === '-0.00' ? '0' : newNum.toLocaleString('en-US', {
    minimumFractionDigits: digit,
    maximumFractionDigits: digit,
  });
};

const dealToolTipText = (text: any, options?: {
  rows: number
  maxWidth: number | string
}) => {
  const { rows = 1, maxWidth = 300 } = options ?? {};
  const item = <div style={{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-inline-box',
    WebkitLineClamp: rows,
    WebkitBoxOrient: 'vertical',
  }}>{text}</div>;
  return (
    <Tooltip trigger={item} align="t" style={{ maxWidth }}>
      {text}
    </Tooltip>
  );
};


export {
  formatNum,
  dealToolTipText,
};