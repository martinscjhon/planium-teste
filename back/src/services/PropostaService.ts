import { Messages } from "../helpers/Message";
import { IBeneficiarios } from "../interface";
import {
  IPlanRepository,
  PlanRepository,
  IPriceRepository,
  PriceRepository,
} from "../repository";
import { BeneficiarioPlano } from "../view-model/BeneficiarioPlano";
import { Preco } from "../view-model/Preco";
import { Proposta } from "../view-model/Proposta";

export class PropostaService {
  private readonly planRepository: IPlanRepository;
  private readonly priceRepository: IPriceRepository;

  constructor() {
    this.planRepository = new PlanRepository();
    this.priceRepository = new PriceRepository();
  }

  async execute(payload: IBeneficiarios) {
    try {
      const proposta: Proposta = new Proposta();

      const plano = await this.planRepository.GetByCodigo(payload.plano);

      if (!plano) throw new Error(Messages.plano.error);

      const preco: Preco = await this.priceRepository.Get(
        plano.codigo,
        payload.beneficiarios.length,
      );

      if (!preco) throw new Error(Messages.preco.error);

      proposta.plano = plano;

      payload.beneficiarios.forEach((beneficiario: any) => {
        const valorFaixa = preco.getFaixa(beneficiario.idade);

        proposta.valorTotal += valorFaixa;

        proposta.beneficiarios.push(
          new BeneficiarioPlano(
            beneficiario.nome,
            beneficiario.idade,
            valorFaixa,
          ),
        );
      });

      proposta.totalVidas = payload.beneficiarios.length;

      return proposta;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
