interface SelectInputProps {
  options: { key: string; value: string }[]
  handleChange: (attr: string) => void
}

export const SelectInput: React.FC<SelectInputProps> = ({ options, handleChange }) => {
  return (
    <select
      onChange={event => handleChange(event.target.value)}
      className="select select-bordered w-full"
    >
      <option value="" disabled>Select a filter</option>
      {options.map(({ key, value }) => (
        <option key={key} value={key}>{value}</option>
      ))}
    </select>
  )
}
