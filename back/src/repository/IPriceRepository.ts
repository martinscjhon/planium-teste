import { Preco } from "../interface";

export interface IPriceRepository {
  Get(codigoPlano: number, quantidadeVida: number): Promise<Preco>;
}
