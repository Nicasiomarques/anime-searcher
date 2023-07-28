import { memo } from "react"
import './card.styles.css'

type CardProps = {
  id: string
  thumb: string
  title: string
}

export const Card = memo(({ id, thumb, title }: CardProps) => {
  return (
    <article className='card' key={id}>
      <img className='card__img' src={thumb} alt={title} />
      <h3 className="card__title">{title}</h3>
    </article>
  )
})
