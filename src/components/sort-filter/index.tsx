import { filtersAvailable } from './sort-filter.type'
import { SelectInput, ButtonToggle } from '..'
import { useAnime } from '../../hooks'

export const SortFilter = () => {
  const { setSort, sortBy, sort } = useAnime()
  const handleFilterChange = (attr: string) => {
    setSort(prev => ({ ...prev, attr }))
    sortBy(sort.attr as any, sort.ascending)
  }

  const toggleSort = () => {
    setSort(prev => ({ ...prev, ascending: !prev.ascending }))
    sortBy(sort.attr as any, sort.ascending)
  }

  return (
    <div className="flex gap-4">
      <SelectInput options={filtersAvailable} handleChange={handleFilterChange} />
      <ButtonToggle isOn={sort.ascending} toggle={toggleSort} />
    </div>
  )
}
