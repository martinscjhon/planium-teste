import { FC } from 'react'
import { ISelectProps } from '../../utils/interface/components/ISelect'
import { SelectComponent } from './style'

const A_Select: FC<ISelectProps> = ({id, label, options, ...rest}) => {
  return (
    <SelectComponent>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        <option value="">Selecione</option>
        {options.map(item => {
          return (
            <option key={Math.random()} value={item.codigo}>{item.nome}</option>
          )
        })}
      </select>
    </SelectComponent>
  )
}

export { A_Select }
