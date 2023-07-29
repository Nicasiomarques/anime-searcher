import { useState, useEffect } from "react";
import { usePagination } from "./use-pagination";
import { PaginationData } from "../types/animes-response-shape";
import { BASE_URL } from "../constans/enviroment";

export type AnimeItem = {
  id: string,
  thumb: string,
  title: string,
  realizeDate: string
}

export const filtersAvailable = [
  { key: 'title', value: "Nome da obra" },
  { key: 'realizeDate', value: 'Data lançamento' }
]

const mapToCardProps = (response: Partial<PaginationData>): AnimeItem[] => {
  const mappedCards = response.data?.map(card => ({
    id: card.id,
    thumb: card.attributes.posterImage.small,
    title: card.attributes.canonicalTitle,
    realizeDate: card.attributes.createdAt
  }))
  return mappedCards ?? []
}

const sortByAttr = (
  animeList: AnimeItem[],
  attr: keyof AnimeItem,
  ascending: boolean = true
) => {
  if (!animeList.length) return [];

  return [...animeList].sort((a, b) => {
    const valueA = a[attr];
    const valueB = b[attr];

    if (typeof valueA === "string" && typeof valueB === "string") {
      const compareResult = valueA.localeCompare(valueB);
      return ascending ? compareResult : -compareResult;
    }

    if (typeof valueA === "number" && typeof valueB === "number") {
      return ascending ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });
};

export const useAnimePagination = (baseURL = BASE_URL) => {
  const [text, setText] = useState("");
  const { data, isLoading, fetchData } = usePagination(`${baseURL}anime`);
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState<AnimeItem[]>([])
  const [sort, setSort] = useState({
    attr: 'title',
    ascending: true
  })

  useEffect(() => {
    fetchData(text, offset)
      .catch(error => {
        // handle adding custom error to cover more scenarios
        console.error(error);
        alert(error.message);
      })
    setFilteredData([])
  }, [text, offset]);

  const sortBy = (attr: keyof AnimeItem, ascending: boolean) => {
    setFilteredData(sortByAttr(mapToCardProps(data), attr, ascending))
  }

  return {
    animeList: filteredData.length ? filteredData : mapToCardProps(data),
    total: data.meta?.count || 0,
    sortBy,
    setOffset,
    fetchData,
    isLoading,
    setText,
    offset,
    text,
    setSort,
    sort,
  };
};
