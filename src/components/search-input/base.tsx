import { HTMLProps } from 'react'

export type InputFieldProps = HTMLProps<HTMLInputElement> & { label?: string }

export const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => (
  <div className="flex flex-col gap-2">
    {label && <label className="font-bold text-base capitalize text-gray-600">{label}</label>}
    <input
      type="text"
      className="bg-white rounded px-4 py-3 w-full shadow-sm shadow-slate-300 focus:shadow-md focus:-translate-y-1 outline-none transition-all duration-200"
      {...rest}
    />
  </div>
)
