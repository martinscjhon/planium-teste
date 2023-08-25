import { FC } from 'react'
import { InputComponent } from './style'
import { IInputProps } from '../../utils/interface/components/IInput'


const A_Input: FC<IInputProps> = ({label, id, type,...rest}) => {
  return (
    <InputComponent>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={label} {...rest} />  
    </InputComponent>
  )
}

export { A_Input }
