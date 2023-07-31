import qs from "qs"
import { BASE_URL, PAGINATION_LIMIT } from "../../constans/enviroment"
import { PaginationData } from "../../types/animes-response-shape"
import { httpClient } from "../../infra/http/http-client"
import { mapToCardProps } from "./mappers"

export async function getAnimeList(text: string, offset = 0) {
  const query = {
    page: { limit: PAGINATION_LIMIT, offset },
    ...(text && { filter: { text } }),
  }
  const url = `${BASE_URL}anime?${qs.stringify(query)}`
  const httpResponse = await httpClient<PaginationData>(url)

  return {
    animeList: mapToCardProps(httpResponse.data),
    total: httpResponse.data.meta?.count,
  }
}
