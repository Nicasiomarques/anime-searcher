import { SearchInput } from './components/input-field/search-input';
import { ListAsGrid } from './components/section-cards';
import { PaginationWrapper } from './components/pagination/pagination-wrapper';
import { useAnimePagination } from './hooks/use-animes';
import './App.css'

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
