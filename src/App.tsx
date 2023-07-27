import { SearchInput, ListAsGrid, PaginationWrapper } from './components';
import { useAnimePagination } from './hooks/use-animes';

export default function App() {
  const {
    text,
    setText,
    animeList,
    isLoading,
    total,
    offset,
    setOffset
  } = useAnimePagination()

  return (
    <div className="App">
      <SearchInput
        placeholder='Nome do Anime, ova ou filme...'
        className="input-field"
        onChange={setText}
        value={text}
      />

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
