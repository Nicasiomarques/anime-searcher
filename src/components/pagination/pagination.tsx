import { MAX_ITEMS, MAX_LEFT, PaginationProps } from './pagination.type'
import { PAGINATION_LIMIT } from '../../constans/enviroment'

export const Pagination = ({ total, offset, setOffset }: PaginationProps) => {
  // calc current page based on the offset and limit
  const currentPage = Math.ceil(offset / PAGINATION_LIMIT) + 1
  // calc total number of pages
  const totalPages = Math.ceil(total / PAGINATION_LIMIT)
  // calc first and last page numbers to be displayed in the pagination bar
  const firstPage = Math.max(currentPage - MAX_LEFT, 1)
  const lastPage = Math.min(firstPage + MAX_ITEMS - 1, totalPages)

  const onPageChange = (page: number) => () => {
    const newOffset = (page - 1) * PAGINATION_LIMIT
    if (newOffset !== offset) setOffset(newOffset)
  }

  const genArrNumOfPages = () =>
    Array.from({ length: lastPage - firstPage + 1 }, (_, index) => firstPage + index)

  return (
    <div className="join">
      <button
        disabled={currentPage === 1}
        onClick={onPageChange(currentPage - 1)}
        className="join-item btn btn-outline btn-primary text-white disabled:bg-indigo-300 disabled:text-gray-200"
        children="Anterior"
      />

      {genArrNumOfPages().map(index => (
        <button
          className="join-item btn btn-primary text-white disabled:bg-indigo-500 disabled:text-gray-100"
          disabled={index === currentPage}
          onClick={onPageChange(index)}
          children={index}
        />
      ))}
      
      <button
        disabled={totalPages === currentPage}
        onClick={onPageChange(currentPage + 1)}
        className="join-item btn btn-outline btn-primary text-white disabled:bg-indigo-300 disabled:text-gray-200"
        children="Proximo"
      />
    </div>
  )
}
