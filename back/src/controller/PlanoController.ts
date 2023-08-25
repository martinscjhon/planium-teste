import { Response, Request } from "express";

import { PlanoService } from "../services";

export class PlanoController {
  private service = new PlanoService();

  async register(request: Request, response: Response) {
    const planos = await this.service.execute();

    return response.json(planos);
  }
}
