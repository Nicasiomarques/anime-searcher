import { Dispatch, createContext } from "react"
import { AnimeItem } from "../../api/anime/anime.types"

type RSet<T> = Dispatch<React.SetStateAction<T>>

type TSort = { attr: string, ascending: boolean }

export type AnimeContextData = {
  text: string
  setText: RSet<string>
  offset: number
  setOffset: RSet<number>
  sort: TSort
  setSort: RSet<TSort>
  sortBy: (attr: keyof AnimeItem, asc: boolean) => void
  filteredData: AnimeItem[]
  setFilteredData: RSet<AnimeItem[]>
  isLoading: boolean
  data?: Partial<{
    animeList: AnimeItem[],
    total: number
  }>
}

export const AnimeContext = createContext<AnimeContextData>({} as AnimeContextData)
