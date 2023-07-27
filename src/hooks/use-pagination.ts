import qs from "qs";
import { useRef, useState } from "react";
import { PaginationData } from "../types/animes-response-shape";
import { fetchWithAbort } from "../infra/remote/http-client";

export const LIMIT = 20

export const usePagination = (baseURL: string) => {
  const [data, setData] = useState<Partial<PaginationData>>({});
  const abortControllerRef = useRef<AbortController>(new AbortController());
  const cacheRef = useRef<Record<string, PaginationData>>({});
  const isLoading = useRef<boolean>(false)
  const fetchData = async (text: string, offset: number) => {
    const query = {
      page: { limit: LIMIT, offset },
      ...(text && { filter: { text } }),
    };

    const fetchOptions = { signal: abortControllerRef.current.signal };
    const url = `${baseURL}?${qs.stringify(query)}`;

    try {
      const newData = await fetchWithAbort(url, fetchOptions.signal);
      // Cache the fetched data
      cacheRef.current[`${text}-${offset}`] = newData;
      return newData;
    } catch (error) {
      if (!abortControllerRef.current.signal.aborted) {
        console.error('Error fetching data:', error);
      }
      return null;
    }
  };

  const handleFetchData = async (text: string, offset: number) => {
    setData({});
    // Check if the data is available in the cache
    const cacheKey = `${text}-${offset}`;
    if (cacheRef.current[cacheKey]) {
      setData(cacheRef.current[cacheKey]);
    } else {
      // If data not in cache, fetch it
      abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      isLoading.current = true
      const newData = await fetchData(text, offset);
      if (newData) setData(newData);
      isLoading.current = false
    }
  };

  return {
    data,
    fetchData: handleFetchData,
    isLoading: isLoading.current
  };
};
