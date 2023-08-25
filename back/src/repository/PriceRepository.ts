import { IPreco } from "../interface";
import { Preco } from "../view-model/Preco";
import { IPriceRepository } from "./IPriceRepository";
import listPrice from "./Prices.json";

export class PriceRepository implements IPriceRepository {
  private readonly repository: IPreco[];

  constructor() {
    this.repository = listPrice;
  }

  async Get(codigoPlano: number, quantidadeVida: number): Promise<Preco> {
    return new Promise((resolve, reject) => {
      try {
        const priceEntity: IPreco = this.repository
          .filter(
            (preco) =>
              preco.codigo === codigoPlano &&
              preco.minimo_vidas <= quantidadeVida,
          )
          .sort((b1: IPreco, b2: IPreco) => {
            if (b1.minimo_vidas < b2.minimo_vidas) {
              return 1;
            }

            if (b1.minimo_vidas > b2.minimo_vidas) {
              return -1;
            }

            return 0;
          })[0];

        const preco: Preco = new Preco(
          priceEntity.codigo,
          priceEntity.minimo_vidas,
          priceEntity.faixa1,
          priceEntity.faixa2,
          priceEntity.faixa3,
        );

        resolve(preco);
      } catch (error) {
        reject(error);
      }
    });
  }
}
