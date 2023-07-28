import { useState, useEffect } from "react";
import { usePagination } from "./use-pagination";
import { PaginationData } from "../types/animes-response-shape";
import { BASE_URL } from "../constans/enviroment";

export const useAnimePagination = (baseURL = BASE_URL) => {
  const [text, setText] = useState("");
  const { data, isLoading, fetchData } = usePagination(`${baseURL}anime`);
  const [offset, setOffset] = useState(0);

  const mapToCardProps = (response: Partial<PaginationData>) => {
    const mappedCards = response.data?.map(card => ({
      id: card.id,
      thumb: card.attributes.posterImage.small,
      title: card.attributes.canonicalTitle
    }))
    return mappedCards ?? []
  }

  useEffect(() => {
    fetchData(text, offset);
  }, [text, offset]);

  return {
    animeList: mapToCardProps(data),
    total: data.meta?.count || 0,
    setOffset,
    fetchData,
    isLoading,
    setText,
    offset,
    text,
  };
};
