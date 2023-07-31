import { SearchInput, SectionGrid, PaginationWrapper, SortFilter } from './components'
import { useAnime } from './hooks'

export default function App() {
  const { data, isLoading, setText, text, setOffset, offset } = useAnime()

  return (
    <main className="max-w-screen-xl mx-auto px-5">
      <div className="flex flex-col gap-3">
        <SearchInput placeholder="Nome do Anime, ova ou filme..." onChange={setText} value={text} />
        <SortFilter />
      </div>

      <SectionGrid animeList={data?.animeList || []} isLoading={isLoading} />
      <PaginationWrapper setOffset={setOffset} offset={offset} total={Number(data?.total)} />
    </main>
  )
}
