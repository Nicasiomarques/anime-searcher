type AnimeItem = {
  id: string,
  thumb: string,
  title: string,
  realizeDate: string
}

export type SortObject = {
  attr: string;
  ascending: boolean;
}

export type SortFilterProps = {
  setSort: React.Dispatch<React.SetStateAction<{
    attr: string;
    ascending: boolean;
  }>>
  sortBy: (attr: keyof AnimeItem, ascending: boolean) => void;
  sort: SortObject;
}
