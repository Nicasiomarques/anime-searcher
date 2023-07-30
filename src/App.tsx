import { SearchInput, SectionGrid, PaginationWrapper, SortFilter } from './components'
import { useAnimePagination } from './hooks/use-animes'

export default function App() {
  const { text, setText, animeList, isLoading, total, offset, setOffset, setSort, sort, sortBy } =
    useAnimePagination()

  return (
    <main className="max-w-screen-xl mx-auto px-5">
      <div className="flex flex-col gap-3">
        <SearchInput placeholder="Nome do Anime, ova ou filme..." onChange={setText} value={text} />

        <SortFilter setSort={setSort} sortBy={sortBy} sort={sort} />
      </div>

      <SectionGrid animeList={animeList} isLoading={isLoading} />

      <PaginationWrapper setOffset={setOffset} offset={offset} total={total} />
    </main>
  )
}
