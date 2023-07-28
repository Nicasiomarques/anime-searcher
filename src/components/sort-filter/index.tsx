import { AnimeItem, filtersAvailable } from "../../hooks";

type SortObject = {
  attr: string;
  ascending: boolean;
}

type SortFilterProps = {
  setSort: React.Dispatch<React.SetStateAction<{
    attr: string;
    ascending: boolean;
  }>>
  sortBy: (attr: keyof AnimeItem, ascending: boolean) => void;
  sort: SortObject;
}

export const SortFilter = ({ setSort, sortBy, sort }: SortFilterProps) => {
  const handleFilterChange = (attr: string) => {
    setSort(prev => ({ ...prev, attr }));
    sortBy(sort.attr as any, sort.ascending)
  };

  const toggleSort = () => {
    setSort(prev => ({ ...prev, ascending: !prev.ascending }))
    sortBy(sort.attr as any, sort.ascending)
  }

  return (
    <div className='sort-filters-wrapper'>
      <select className="input-field" onChange={event => handleFilterChange(event.target.value)}>
        <option value="" disabled>Select a filter</option>
        {filtersAvailable.map(([filterKey, title]) => (
          <option key={filterKey} value={filterKey}>
            {title}
          </option>
        ))}
      </select>

      <button
        className={`btn ${sort.ascending ? 'btn--active' : ''}`}
        onClick={toggleSort}>
        {sort.ascending ? 'Ascendente' : 'Descendente'}
      </button>
    </div>
  )
}
