import { memo } from "react"

type CardProps = {
  id: string
  thumb: string
  title: string
}

export const Card = memo(({ id, thumb, title }: CardProps) => {
  return (
    <article className='card' key={id}>
      <img className='card__img' src={thumb} alt={title} />
      <div className="card__details">
        <h1>random title</h1>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <p>{title}</p>
    </article>
  )
})
