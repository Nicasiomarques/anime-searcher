import { filtersAvailable } from './sort-filter.type'
import { SelectInput, ButtonToggle } from '..'
import { useAnime } from '../../hooks'
import { AnimeItem } from '../../api/anime/anime.types'

export const SortFilter = () => {
  const { setSort, sortBy, sort } = useAnime()
  const handleFilterChange = (attr: string) => {
    setSort(prev => ({ ...prev, attr }))
    sortBy(sort.attr as keyof AnimeItem, sort.ascending)
  }

  const toggleSort = () => {
    setSort(prev => ({ ...prev, ascending: !prev.ascending }))
    sortBy(sort.attr as keyof AnimeItem, sort.ascending)
  }

  return (
    <div className="flex gap-4">
      <SelectInput options={filtersAvailable} handleChange={handleFilterChange} />
      <ButtonToggle checked={sort.ascending} toggle={toggleSort} />
    </div>
  )
}
