export class BeneficiarioPlano {
  nome: string;
  idade: number;
  valorPlano: number;

  constructor(nome: string, idade: number, valor: number) {
    this.idade = idade;
    this.nome = nome;
    this.valorPlano = valor;
  }
}
