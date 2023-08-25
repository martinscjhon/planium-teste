export class EnvironmentConfig {
  public static Port: number;
  public static AccessOrigin: string;

  public static async register() {
    EnvironmentConfig.Port = 8080;
    EnvironmentConfig.AccessOrigin = "http://localhost:5173/";
  }
}
