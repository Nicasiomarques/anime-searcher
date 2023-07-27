import { PaginationWrapperProps } from "./pagination.type";
import { Pagination } from "./pagination";
import './pagination.styles.css'

export const PaginationWrapper = ({
  total,
  offset,
  setOffset
}: PaginationWrapperProps) => {
  if (!total) return null;

  return (
    <div className='pagination-wrapper'>
      <Pagination
        total={total}
        setOffset={setOffset}
        offset={offset}
      />
    </div>
  );
};
