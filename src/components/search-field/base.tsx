import { HTMLProps } from "react"
import './input-field.styles.css'

export type InputFieldProps = HTMLProps<HTMLInputElement> & { label?: string }

export const InputField: React.FC<InputFieldProps> = ({ label,...rest }) =>
  <div className="input-wrapper">
    {label && <label className="input-field__label">{label}</label>}
    <input type="text" {...rest} />
  </div>
