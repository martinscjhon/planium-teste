import express, { Request, Response } from "express";

import { PlanoController, PropostaController } from "../controller";

const router = express.Router();

router.get("/planos", (request: Request, response: Response) => {
  return new PlanoController().register(request, response);
});

router.post("/solicitacao/proposta", (request: Request, response: Response) => {
  return new PropostaController().register(request, response);
});

router.get("/download", (request: Request, response: Response) => {
  const file = `${__dirname}/../fileupload/proposta.json`;
  response.download(file);
});

export { router };
