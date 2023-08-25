import { IPlano } from "../interface";
import { IPlanRepository } from "./IPlanRepository";
import listPlans from "./Plans.json";

export class PlanRepository implements IPlanRepository {
  private readonly repository: IPlano[];

  constructor() {
    this.repository = listPlans;
  }

  async GetAll(): Promise<IPlano[]> {
    return new Promise((resolve, reject) => {
      try {
        const allPlans = this.repository;
        resolve(allPlans);
      } catch (error) {
        reject(error);
      }
    });
  }

  async GetByCodigo(codigo: number): Promise<IPlano> {
    return new Promise((resolve, reject) => {
      try {
        const plan = this.repository.find((plano) => plano.codigo === codigo);
        resolve(plan);
      } catch (error) {
        reject(error);
      }
    });
  }
}
