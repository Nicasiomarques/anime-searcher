import { MAX_ITEMS, MAX_LEFT, PaginationProps } from './pagination.type'
import { LIMIT } from '../../hooks/use-pagination'
import { BtnIndicator } from './btn-indicator'
import { BtnItem } from './btn-item'

export const Pagination = ({ total, offset, setOffset }: PaginationProps) => {
  // calc current page based on the offset and limit
  const currentPage = Math.ceil(offset / LIMIT) + 1
  // calc total number of pages
  const totalPages = Math.ceil(total / LIMIT)
  // calc first and last page numbers to be displayed in the pagination bar
  const firstPage = Math.max(currentPage - MAX_LEFT, 1)
  const lastPage = Math.min(firstPage + MAX_ITEMS - 1, totalPages)

  const onPageChange = (page: number) => () => {
    const newOffset = (page - 1) * LIMIT
    if (newOffset !== offset) setOffset(newOffset)
  }

  const genArrNumOfPages = () =>
    Array.from({ length: lastPage - firstPage + 1 }, (_, index) => firstPage + index)

  return (
    <div className="flex items-center gap-4">
      <BtnIndicator
        onPageChange={onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        label="Anterior"
      />

      {genArrNumOfPages().map(index => (
        <BtnItem isOn={index === currentPage} onPageChange={onPageChange(index)} label={index} />
      ))}

      <BtnIndicator
        onPageChange={onPageChange(currentPage + 1)}
        disabled={totalPages === currentPage}
        label="Proximo"
      />
    </div>
  )
}
