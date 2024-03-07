import React from 'react';
import { formatNum } from 'lzkj-data-web-pack';

console.log(formatNum(1234567890)); // 1,234,567,890
console.log(formatNum(0.1234, true, 2)); // 12.34%
console.log(formatNum(0.1234, true, 0)); // 12%
console.log(formatNum(0.1234, false, 2)); // 0.12
console.log(formatNum(0.1234, false, 0)); // 0
console.log(formatNum(null)); // -
console.log(formatNum(undefined, false, 0, '--')); // --


export default () => {
  return <div>test</div>;
};