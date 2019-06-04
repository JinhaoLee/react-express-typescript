import { Application } from "express";
import {
  RegisterController,
  SearchController,
  HelperController,
  AuthController
} from "../controllers";
import { authMiddleware } from "../middlewares";

class Routes {
  private authController: AuthController;
  private registerController: RegisterController;
  private searchController: SearchController;
  private helperController: HelperController;

  constructor() {
    this.authController = new AuthController();
    this.registerController = new RegisterController();
    this.searchController = new SearchController();
    this.helperController = new HelperController();
  }

  public routes(app: Application): void {
    // Authentication
    app.route("/api/v2/login").post(this.authController.login);
    app.route("/api/v2/register").post(this.registerController.register);

    // search
    app
      .route("/api/v2/search")
      .get(authMiddleware, this.searchController.search);

    // helpers
    app.route("/api/v2/offences").get(this.helperController.getOffences);
    app.route("/api/v2/areas").get(this.helperController.getAreas);
    app.route("/api/v2/ages").get(this.helperController.getAges);
    app.route("/api/v2/genders").get(this.helperController.getGenders);
    app.route("/api/v2/years").get(this.helperController.getYears);
  }
}

export default Routes;
