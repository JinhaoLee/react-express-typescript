import AuthController from "../controllers/AuthController";
import { Application } from "express";
import {
  RegisterController,
  SearchController,
  HelperController
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
    app.route("/login").post(this.authController.login);
    app.route("/register").post(this.registerController.register);

    // search
    app.route("/search").get(authMiddleware, this.searchController.search);

    // helpers
    app.route("/offences").get(this.helperController.getOffences);
    app.route("/areas").get(this.helperController.getAreas);
    app.route("/ages").get(this.helperController.getAges);
    app.route("/genders").get(this.helperController.getGenders);
    app.route("/years").get(this.helperController.getYears);
  }
}

export default Routes;
