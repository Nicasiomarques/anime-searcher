import {  useContext } from 'react'
import { AnimeContext } from './use-animes.types'

export const useAnime = () => {
  const context = useContext(AnimeContext)
  if (!context) {
    throw new Error('useAnimeContext must be used within the AnimeProvider')
  }
  return context
}
