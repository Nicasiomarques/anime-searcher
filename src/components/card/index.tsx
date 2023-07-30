import { memo } from 'react'
import classnames from 'classnames'

type CardProps = {
  thumb: string
  title: string
}

export const Card: React.FC<CardProps> = memo(({ thumb, title }) => {
  const cardStyles = {
    base: 'group rounded hover:scale-105 cursor-pointer duration-200',
    image: 'rounded-md brightness-75 duration-200 hover:brightness-100',
    title: 'text-amber-600 text-sm truncate mt-2 group-hover:text-purple-600',
  }

  const cardClass = classnames(cardStyles.base)

  return (
    <article className={cardClass}>
      <img className={cardStyles.image} src={thumb} alt={title} />
      <h3 className={cardStyles.title}>{title}</h3>
    </article>
  )
})
