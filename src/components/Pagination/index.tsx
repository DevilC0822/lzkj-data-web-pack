import React, { type FC } from 'react';
import { Pagination as NextPagination } from '@alifd/next';
import '@alifd/next/lib/pagination/style';

interface IPageInfo {
  total: number
  current: number
  size: number
}

interface IProps {
  pageInfo: IPageInfo
  pageSizeList?:  number[]
  onChange: (pageInfo: IPageInfo) => void
}

const Pagination: FC<IProps> = (props) => {
  const { pageInfo, pageSizeList = [5, 10, 30, 50, 100], onChange = () => {}, ...otherProps } = props;
  const pageNoChange = (current: number) => {
    if (typeof onChange === 'function') {
      onChange({
        ...pageInfo,
        current,
      });
    }
  };
  const handlePageSizeChange = (size: number) => {
    if (typeof onChange === 'function') {
      onChange({
        ...pageInfo,
        size,
        current: 1,
      });
    }
  };
  const popupProps = {
    align: 'bl tl'
  };
  return (
    <div
      style={{
        marginTop: 20,
        textAlign: 'right',
      }}
    >
      <NextPagination
        shape="arrow-only"
        pageSizeSelector="dropdown"
        pageSizePosition="end"
        popupProps={popupProps}
        total={pageInfo.total}
        current={pageInfo.current}
        pageSize={pageInfo.size}
        pageSizeList={pageSizeList}
        totalRender={(total) => `共${total}条`}
        onChange={pageNoChange}
        onPageSizeChange={handlePageSizeChange}
        {...otherProps}
      />
    </div>
  );
};

export default Pagination;