import { FC } from 'react'
import { ButtonComponent } from './style'
import { IButtonProps } from '../../utils/interface/components/IButton'

const A_Button: FC<IButtonProps> = ({background, height, title, width, size,  ...rest}) => {
  return (
    <ButtonComponent background={background} width={width} height={height} size={size} {...rest}>{title}</ButtonComponent>
  )
}

export { A_Button }
