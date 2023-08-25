import { IPlanRepository } from "../repository/IPlanRepository";
import { PlanRepository } from "../repository/PlanRepository";

export class PlanoService {
  private readonly repository: IPlanRepository;

  constructor() {
    this.repository = new PlanRepository();
  }

  async execute() {
    const listaPlanos = await this.repository.GetAll();
    return listaPlanos;
  }
}
