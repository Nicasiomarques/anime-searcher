import { ComponentProps } from 'react'
import { twMerge } from '../../helpers/tailwind-merge'

type ButtonPropsToggle = ComponentProps<'button'> & {
  isOn: boolean
  toggle: () => void
}

export const ButtonToggle: React.FC<ButtonPropsToggle> = ({ isOn, toggle, ...rest }) => {
  return (
    <button
      data-on={isOn}
      className={twMerge(
        'py-2 px-4 font-bold border-2 rounded cursor-pointer text-purple-600 border-purple-600 data-[on=true]:bg-purple-600 data-[on=true]:text-white',
        rest.className
      )}
      onClick={toggle}
      {...rest}
    >
      {isOn ? 'Ascendente' : 'Descendente'}
    </button>
  )
}
