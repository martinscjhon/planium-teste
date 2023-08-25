import { EnvironmentConfig } from "./config/environment";
import { getStartAplication } from "./config/start-aplication";

(async () => {
  await EnvironmentConfig.register();
  getStartAplication();
})();
