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
    app.route(`${process.env.API_BASE}/login`).post(this.authController.login);
    app
      .route(`${process.env.API_BASE}/register`)
      .post(this.registerController.register);

    // search
    app
      .route(`${process.env.API_BASE}/search`)
      .get(authMiddleware, this.searchController.search);

    // helpers
    app
      .route(`${process.env.API_BASE}/offences`)
      .get(this.helperController.getOffences);
    app
      .route(`${process.env.API_BASE}/areas`)
      .get(this.helperController.getAreas);
    app
      .route(`${process.env.API_BASE}/ages`)
      .get(this.helperController.getAges);
    app
      .route(`${process.env.API_BASE}/genders`)
      .get(this.helperController.getGenders);
    app
      .route(`${process.env.API_BASE}/years`)
      .get(this.helperController.getYears);
  }
}

export default Routes;
