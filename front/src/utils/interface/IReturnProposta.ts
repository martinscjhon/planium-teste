import { IAddBeneficiario } from './IAddBeneficiario'
import { IPlanos } from './IPlanos'

export interface IReturnProposta {
  beneficiarios: IAddBeneficiario[]
  plano: IPlanos
  totalVidas: number
  valorTotal: number
}
