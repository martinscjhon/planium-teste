import express from "express";

import { router } from "../router";
import { EnvironmentConfig } from "./environment";

export function getStartAplication() {
  const app = express();

  app.get("/health", (req, res) => {
    return res.json({ message: "Ok" });
  });

  app.use(express.json());
  app.use(router);
  app.listen(EnvironmentConfig.Port, () => console.log("Server is running"));
}
