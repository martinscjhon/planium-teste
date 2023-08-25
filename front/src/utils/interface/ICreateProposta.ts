import { IAddBeneficiario } from './IAddBeneficiario'

export interface ICreateProposta {
  beneficiarios: IAddBeneficiario[]
  plano: number
}
