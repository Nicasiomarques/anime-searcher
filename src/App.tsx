import { SearchInput, ListAsGrid, PaginationWrapper, SortFilter } from './components';
import { useAnimePagination } from './hooks/use-animes';

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
          sortBy={sortBy}
          sort={sort}
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
