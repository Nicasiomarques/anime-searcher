import { ComponentProps } from 'react'

type ButtonPropsToggle = ComponentProps<'input'> & {
  toggle: () => void
}

export const ButtonToggle: React.FC<ButtonPropsToggle> = ({ toggle, ...rest }) => {
  return (
    <div className="form-control w-52">
      <label className="cursor-pointer label flex" onClick={toggle}>
        <input type="checkbox" className="toggle toggle-primary" {...rest} />
      </label>
    </div>
  )
}
