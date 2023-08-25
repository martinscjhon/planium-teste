// eslint-disable-next-line import/no-extraneous-dependencies
import * as cors from "cors";
import { Express } from "express";

export const startCors = (app: Express) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    app.use(cors.default());
    next();
  });
};
