import { useQuery } from 'react-query'
import React, { useState } from 'react'

import { sortByAttr } from '../../helpers/sort-collections'
import { AnimeItem } from '../../api/anime/anime.types'
import { getAnimeList } from '../../api/anime/anime'
import { getTimeIn } from '../../helpers/time'
import { AnimeContext } from './use-animes.types'

export const AnimeProvider: React.FC<any> = ({ children }) => {
  const [text, setText] = useState('')
  const [offset, setOffset] = useState(0)
  const [sort, setSort] = useState({ attr: 'title', ascending: true })
  const [filteredData, setFilteredData] = useState<AnimeItem[]>([])
  const { data, isLoading } = useQuery({
    queryKey: ['Animes', text, offset],
    queryFn: async () => await getAnimeList(text, offset),
    staleTime: getTimeIn(2, 'min'),
  })

  const sortBy = (attr: keyof AnimeItem, asc: boolean): void =>
    setFilteredData(sortByAttr(data?.animeList || [], attr, asc))

  return (
    <AnimeContext.Provider
      value={{
        text,
        setText,
        offset,
        setOffset,
        sort,
        setSort,
        filteredData,
        sortBy,
        setFilteredData,
        isLoading,
        data: {
          animeList: filteredData.length ? filteredData : data?.animeList,
          ...data
        }
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}

export * from './use-anime-factory'
