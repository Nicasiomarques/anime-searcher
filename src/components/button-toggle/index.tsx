import classnames from 'classnames'

interface ButtonPropsToggle {
  isOn: boolean
  toggle: () => void
}

export const ButtonToggle: React.FC<ButtonPropsToggle> = ({ isOn, toggle }) => {
  const btnStyles = {
    base: 'py-2 px-4 font-bold border-2 rounded cursor-pointer border-purple-600',
    on: 'bg-purple-600 text-white',
    off: 'text-purple-600',
  }

  const buttonClass = classnames(btnStyles.base, {
    [btnStyles.on]: isOn,
    [btnStyles.off]: !isOn,
  })

  return (
    <button className={buttonClass} onClick={toggle}>
      {isOn ? 'Ascendente' : 'Descendente'}
    </button>
  )
}
