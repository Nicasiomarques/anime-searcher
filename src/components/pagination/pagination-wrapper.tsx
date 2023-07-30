import { PaginationWrapperProps } from './pagination.type'
import { Pagination } from './pagination'

export const PaginationWrapper = ({ total, offset, setOffset }: PaginationWrapperProps) => {
  if (!total) return null

  return (
    <div className="flex justify-center my-10">
      <Pagination setOffset={setOffset} offset={offset} total={total} />
    </div>
  )
}
