import { FC } from 'react'
import { M_Header } from '../moleculas/M_Header'
import { O_Container } from '../organismos/O_Container'

const T_Initial: FC = () => {
  return (
    <>
        <M_Header />
        <O_Container />
    </>
  )
}

export { T_Initial }
