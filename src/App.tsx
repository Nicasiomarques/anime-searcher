import { SearchInput, ListAsGrid, PaginationWrapper } from './components';
import { AnimeItem, filtersAvailable, useAnimePagination } from './hooks/use-animes';

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

const SortFilter = ({ setSort, sortBy, sort }: SortFilterProps) => {

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

export default function App() {
  const {
    text,
    setText,
    animeList,
    isLoading,
    total,
    offset,
    setOffset,
    setSort,
    sort,
    sortBy
  } = useAnimePagination()

  return (
    <div className="App">
      <div className="filter-container">
        <SearchInput
          placeholder='Nome do Anime, ova ou filme...'
          className="input-field"
          onChange={setText}
          value={text}
        />
        <SortFilter
          setSort={setSort}
          sort={sort}
          sortBy={sortBy}
        />
      </div>

      <ListAsGrid
        animeList={animeList}
        isLoading={isLoading}
      />

      <PaginationWrapper
        setOffset={setOffset}
        offset={offset}
        total={total}
      />
    </div>
  );
}
