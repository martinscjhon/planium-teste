import { EnvironmentConfig, getStartAplication } from "./config";

(async () => {
  await EnvironmentConfig.register();
  getStartAplication();
})();
