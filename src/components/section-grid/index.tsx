import { Card } from '../card'

type ListAsGridProps = {
  animeList: Array<{
    id: string
    thumb: string
    title: string
  }>
  isLoading: boolean
}

export const SectionGrid = ({ animeList, isLoading }: ListAsGridProps) => {
  return (
    <section className="grid grid-cols-4-full gap-6 justify-items-center my-8">
      {isLoading && <span className="loading loading-ring loading-lg"></span>}
      {!isLoading && !animeList.length && <span>Nem um resgistro encontrado...</span>}
      {animeList.map(anime => (
        <Card key={anime.id} {...anime} />
      ))}
    </section>
  )
}
