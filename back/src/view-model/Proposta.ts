import { IPlano } from "../interface";
import { BeneficiarioPlano } from "./BeneficiarioPlano";

export class Proposta {
  beneficiarios: BeneficiarioPlano[];
  plano: IPlano;
  valorTotal: number;
  totalVidas: number;

  constructor() {
    this.beneficiarios = [];
    this.valorTotal = 0;
    this.totalVidas = 0;
  }
}
