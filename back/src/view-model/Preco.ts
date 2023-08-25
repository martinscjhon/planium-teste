import { IPreco } from "../interface";

export class Preco implements IPreco {
  codigo: number;
  minimo_vidas: number;
  faixa1: number;
  faixa2: number;
  faixa3: number;

  constructor(
    codigo: number,
    minimo_vidas: number,
    faixa1: number,
    faixa2: number,
    faixa3: number,
  ) {
    this.codigo = codigo;
    this.minimo_vidas = minimo_vidas;
    this.faixa1 = faixa1;
    this.faixa2 = faixa2;
    this.faixa3 = faixa3;
  }

  getFaixa(idade: number): number {
    if (idade <= 17) return this.faixa1;

    if (idade > 17 && idade <= 40) return this.faixa2;

    return this.faixa3;
  }
}
