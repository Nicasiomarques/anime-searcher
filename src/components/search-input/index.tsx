import { ChangeEvent, useState } from 'react'

import { useDebounce } from '../../hooks/use-debounce'
import { InputField, InputFieldProps } from './base'

type SearchInputProps = Omit<InputFieldProps, 'onChange'> & {
  value: string
  onChange: (value: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, ...rest }) => {
  const [displayValue, setDisplayValue] = useState<string>(value)
  const debouncedChange = useDebounce(value => onChange(value), 700)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setDisplayValue(newValue)
    debouncedChange(newValue)
  }

  return <InputField onChange={handleChange} value={displayValue} type="search" {...rest} />
}
