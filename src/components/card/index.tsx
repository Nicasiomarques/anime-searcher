import { memo } from "react"

type CardProps = {
  thumb: string
  title: string
}

export const Card = memo(({ thumb, title }: CardProps) => {
  return (
    <article className='group rounded hover:scale-105 cursor-pointer duration-200'>
      <img className='rounded-md brightness-75 duration-200 hover:brightness-100' src={thumb} alt={title} />
      <h3 className="text-amber-600 text-sm truncate mt-2 group-hover:text-purple-600">{title}</h3>
    </article>
  )
})
