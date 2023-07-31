import { PaginationData } from "./anime-api.types"
import { AnimeItem } from "./anime.types"

export const mapToCardProps = (response: Partial<PaginationData>): AnimeItem[] => {
  const mappedCards = response.data?.map(card => ({
    id: card.id,
    thumb: card.attributes.posterImage.small,
    title: card.attributes.canonicalTitle,
    realizeDate: card.attributes.createdAt,
  }))
  return mappedCards ?? []
}
