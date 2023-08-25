import { FC } from 'react'
import { ContainerCardBeneficiario } from './style'
import { ICardBeneficiario } from '../../utils/interface/components/ICardBeneficiario'
import { A_Text } from '../atomos/A_Text'

const M_CardBeneficiarios: FC<ICardBeneficiario> = ({ beneficiarios }) => {
    return (
        <ContainerCardBeneficiario>
            {beneficiarios.length > 0 ?
                <ul>
                    {beneficiarios.map(item => {
                        return (
                            <li key={Math.random()}>
                                Beneficiário {beneficiarios.indexOf(item) + 1}:  {item.nome} / {item.idade} anos
                            </li>
                        )
                    })}
                </ul>
                :
                <div className='null'>
                    <A_Text size={'13px'} color={'rgb(94, 88, 115)'} weight={400} title={'Sem beneficiários'} />
                </div>}
        </ContainerCardBeneficiario>
    )
}

export { M_CardBeneficiarios }
