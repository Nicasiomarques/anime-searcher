export interface PaginationData {
  data: AnimeData[]
  meta: {
    count: number
  }
  links: {
    first: string
    next: string | null
    last: string
  }
}

export interface AnimeData {
  id: string
  type: string
  links: {
    self: string
  }
  attributes: AnimeAttributes
}

export interface AnimeAttributes {
  createdAt: string
  updatedAt: string
  synopsis: string
  description: string
  coverImageTopOffset: number
  titles: {
    en: string
    en_jp: string
    ja_jp: string
  }
  canonicalTitle: string
  abbreviatedTitles: string[]
  averageRating: string
  ratingFrequencies: Record<string, string>
  userCount: number
  favoritesCount: number
  startDate: string
  endDate: string
  nextRelease: string | null
  popularityRank: number
  ratingRank: number
  ageRating: string
  ageRatingGuide: string
  subtype: string
  status: string
  tba: string | null
  posterImage: ImageData
  coverImage: ImageData
  episodeCount: number
  episodeLength: number
  totalLength: number
  youtubeVideoId: string | null
  showType: string
  nsfw: boolean
}

export interface ImageData {
  tiny: string
  large: string
  small: string
  medium: string
  original: string
  meta: {
    dimensions: {
      tiny: {
        width: number
        height: number
      }
      large: {
        width: number
        height: number
      }
      small: {
        width: number
        height: number
      }
      medium: {
        width: number
        height: number
      }
    }
  }
}

