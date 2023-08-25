import { FC } from 'react'
import logo from '../../assets/logo-Planium.svg'
import { ImageComponent } from './style'
import { IImageProps } from '../../utils/interface/components/IImage'

const A_Image: FC<IImageProps> = ({height, width}) => {
  return (
    <ImageComponent src={logo} height={height} alt="image" width={width}/>
  )
}

export { A_Image }
