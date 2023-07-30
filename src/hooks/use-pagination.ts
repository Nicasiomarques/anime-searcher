import qs from "qs";
import { useRef, useState } from "react";
import { PaginationData } from "../types/animes-response-shape";
import { httpClient } from "../infra/remote/http-client";

export const LIMIT = 20

export const usePagination = (baseURL: string) => {
  const [data, setData] = useState<Partial<PaginationData>>({});
  const abortControllerRef = useRef<AbortController>(new AbortController());
  const cacheRef = useRef<any | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async (text: string, offset: number) => {
    const query = {
      page: { limit: LIMIT, offset },
      ...(text && { filter: { text } }),
    };

    const fetchOptions = { signal: abortControllerRef.current.signal };
    const url = `${baseURL}?${qs.stringify(query)}`;
    const newData = await httpClient<PaginationData>(url, fetchOptions);
    cacheRef.current[`${text}-${offset}`] = newData;
    return newData || null
  };

  const handleFetchData = async (text: string, offset: number) => {
    setIsLoading(true)
    setData({});
    // Check if the data is available in the cache
    const cacheKey = `${text}-${offset}`;
    if (cacheRef.current[cacheKey]) {
      setData(cacheRef.current[cacheKey]);
    } else {
      // If data not in cache, fetch it
      abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      const newData = await fetchData(text, offset);
      if (newData) setData(newData);
    }
    setIsLoading(false)
  };

  return {
    data,
    fetchData: handleFetchData,
    isLoading: isLoading
  };
};
