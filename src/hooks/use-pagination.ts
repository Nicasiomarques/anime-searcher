import qs from 'qs'
import { useRef, useState } from 'react'

import { PaginationData } from '../types/animes-response-shape'
import { httpClient } from '../infra/http/http-client'

export const LIMIT = 20

export const usePagination = (baseURL: string) => {
  const [data, setData] = useState<any>({})
  const abortControllerRef = useRef<AbortController>(new AbortController())
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async (text: string, offset: number) => {
    const query = {
      page: { limit: LIMIT, offset },
      ...(text && { filter: { text } }),
    }
    const fetchOptions = { signal: abortControllerRef.current.signal }
    const url = `${baseURL}?${qs.stringify(query)}`
    const newData = await httpClient<PaginationData>(url, fetchOptions)
    return newData || null
  }

  const handleFetchData = async (text: string, offset: number) => {
    setIsLoading(true)
    setData({})
    abortControllerRef.current.abort()
    abortControllerRef.current = new AbortController()
    const newData = await fetchData(text, offset)
    if (newData) setData(newData.data)
    setIsLoading(false)
  }

  return {
    data,
    fetchData: handleFetchData,
    isLoading: isLoading,
  }
}
