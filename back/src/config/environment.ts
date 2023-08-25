export class EnvironmentConfig {
  public static Port: number;

  public static async register() {
    EnvironmentConfig.Port = 8080;
  }
}
