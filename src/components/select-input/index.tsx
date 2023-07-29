interface SelectInputProps {
  options: { key: string; value: string }[];
  handleChange: (attr: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({ options, handleChange }) => {
  return (
    <select
      className='bg-white rounded px-4 py-3 w-full shadow-sm shadow-slate-300 focus:shadow-md focus:-translate-y-1 outline-none transition-all duration-200'
      onChange={event => handleChange(event.target.value)}
    >
      <option value='' disabled>Select a filter</option>
      {options.map(filter => (
        <option {...filter}>{filter.value}</option>
      ))}
    </select>
  );
};
