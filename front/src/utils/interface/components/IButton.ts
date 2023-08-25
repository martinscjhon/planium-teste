import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  background: string
  width: string
  height: string
  size: string
}
