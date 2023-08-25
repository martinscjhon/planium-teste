import { SelectHTMLAttributes } from 'react'
import { IPlanos } from '../IPlanos'

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IPlanos[]
  label: string
  id: string
}
