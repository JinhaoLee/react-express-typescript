import AuthController from "../controllers/AuthController";
import { Application } from "express";
import RegisterController from "../controllers/REgisterController";
import SearchController from "../controllers/SearchController";
import checkToken from "../middlewares/checkToken";

class Routes {
  private authController: AuthController;
  private registerController: RegisterController;
  private searchController: SearchController;

  constructor() {
    this.authController = new AuthController();
    this.registerController = new RegisterController();
    this.searchController = new SearchController();
  }

  public routes(app: Application): void {
    // login
    app.route("/login").post(this.authController.login);

    // login
    app.route("/register").post(this.registerController.register);

    // search
    app.route("/search").get(checkToken, this.searchController.search);
  }
}

export default Routes;
