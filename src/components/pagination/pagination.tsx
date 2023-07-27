import { MAX_ITEMS, MAX_LEFT, PaginationProps } from './pagination.type';
import { LIMIT } from '../../hooks/use-pagination';

export const Pagination = ({total, offset, setOffset}: PaginationProps) => {
  // Calculate the current page based on the offset and limit
  const currentPage = Math.ceil(offset / LIMIT) + 1;

  // Calculate the total number of pages
  const totalPages = Math.ceil(total / LIMIT);

  // Calculate the first and last page numbers to be displayed in the pagination bar
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);
  const lastPage = Math.min(firstPage + MAX_ITEMS - 1, totalPages);

  // Function to handle page change
  const onPageChange = (page: number): void => {
    const newOffset = (page - 1) * LIMIT;
    // Update offset only if it has changed
    if (newOffset !== offset) setOffset(newOffset);
  };

  // Function to render the previous and next buttons in the pagination bar
  const renderButton = (label: string, targetPage: number, disabled: boolean) => (
    <li>
      <button
        className='pagination__indicator'
        onClick={() => onPageChange(targetPage)}
        disabled={disabled}
      >
        {label}
      </button>
    </li>
  );

  // Function to render individual page numbers in the pagination bar
  const renderPaginationItem = (page: number) => (
    <li key={page}>
      <button
        onClick={() => onPageChange(page)}
        className={
          page === currentPage
            ? 'pagination__item pagination__item--active'
            : 'pagination__item'
        }
      >
        {page}
      </button>
    </li>
  );

  return (
    <ul className="pagination">
      {renderButton('<', currentPage - 1, currentPage === 1)}
      {Array.from({ length: lastPage - firstPage + 1 }, (_, index) => firstPage + index).map(
        renderPaginationItem
      )}
      {renderButton('>', currentPage + 1, currentPage === totalPages)}
    </ul>
  );
};
