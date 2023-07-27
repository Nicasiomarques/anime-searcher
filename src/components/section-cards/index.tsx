import { Card } from "../card"
import './section-cards.style.css'

type AnimeItem = {
  id: string,
  thumb: string,
  title: string
}

type ListAsGridProps = {
  animeList: AnimeItem[]
  isLoading: boolean
}

export const ListAsGrid = ({ animeList, isLoading }:ListAsGridProps) => {
  return (
    <section className="section-cards">
      {isLoading && <span>Carregando...</span>}
      {!isLoading && !animeList.length && <span>Nem um resgistro encontrado...</span>}
      {animeList.map((anime) => <Card key={anime.id} {...anime} />)}
    </section>
  )
}
