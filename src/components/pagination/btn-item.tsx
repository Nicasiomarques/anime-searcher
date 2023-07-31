import { classnames } from "../../helpers/classname"

interface BtnItemProps {
  onPageChange: () => void
  isOn: boolean
  label: string | number
}

export const BtnItem = ({ onPageChange, isOn, label }: BtnItemProps) => {
  const btnStyles = {
    base: 'border-2 border-transparent rounded px-4 py-1 duration-200',
    off: 'hover:border-purple-600 hover:text-purple-600',
    on: 'bg-purple-600 text-white',
  }

  const buttonClass = classnames(btnStyles.base, {
    [btnStyles.on]: isOn,
    [btnStyles.off]: !isOn,
  })

  return (
    <button onClick={onPageChange} className={buttonClass}>
      {label}
    </button>
  )
}
