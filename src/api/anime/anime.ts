import { BASE_URL, PAGINATION_LIMIT } from '../../constans/enviroment'
import { httpClient } from '../../infra/http/http-client'
import { PaginationData } from './anime-api.types'
import { mapToCardProps } from './mappers'

export async function getAnimeList(text: string, offset = 0) {
  const url = `${BASE_URL}anime`
  const query = {
    page: { limit: PAGINATION_LIMIT, offset },
    ...(text && { filter: { text } }),
  }
  const httpResponse = await httpClient<PaginationData>(url, { query })
  return {
    animeList: mapToCardProps(httpResponse.data),
    total: httpResponse.data.meta?.count,
  }
}
