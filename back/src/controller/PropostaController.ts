import { Request, Response } from "express";
import fs from "fs";

import { PropostaService } from "../services";

export class PropostaController {
  private service = new PropostaService();

  async register(request: Request, response: Response) {
    try {
      const { body } = request;
      const proposta = await this.service.execute(body);
      fs.writeFile(
        `${__dirname}/../fileupload/proposta.json`,
        JSON.stringify(proposta),

        (error) => {
          if (error) {
            return error.message;
          }

          return null;
        },
      );

      return response.json(proposta);
    } catch (error: any) {
      return response
        .status(500)
        .json({ isError: true, message: error.message.replace("Error: ", "") });
    }
  }
}
