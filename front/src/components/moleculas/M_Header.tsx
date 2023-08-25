import { FC } from 'react'
import { ContainerHeader } from './style'
import { A_Image } from '../atomos/A_Image'

const M_Header: FC = () => {
  return (
    <ContainerHeader>
        <A_Image width={'15rem'} height={'auto'} />
    </ContainerHeader>
  )
}

export { M_Header }
