import { IPlano } from "../interface";

export interface IPlanRepository {
  GetAll(): Promise<IPlano[]>;
  GetByCodigo(codigo: number): Promise<IPlano>;
}
