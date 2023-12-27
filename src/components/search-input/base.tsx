import { HTMLProps } from 'react'

export type InputFieldProps = HTMLProps<HTMLInputElement> &
  Partial<{ label: string; error: 'string' }>

export const InputField: React.FC<InputFieldProps> = ({ label, error, ...rest }) => (
  <label className="form-control w-full">
    {label && (
      <div className="label">
        <span className="label-text">What is your name?</span>
      </div>
    )}

    <input type="text" className="input input-bordered" {...rest} />

    {error && (
      <div className="label">
        <span className="label-text-alt">{error}</span>
      </div>
    )}
  </label>
)
