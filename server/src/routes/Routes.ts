import AuthController from "../controllers/AuthController";
import { Request, Response, Application } from "express";
import RegisterController from "../controllers/REgisterController";

class Routes {
  private authController: AuthController;
  private registerController: RegisterController;

  constructor() {
    this.authController = new AuthController();
    this.registerController = new RegisterController();
  }

  public routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "Hello World" });
    });

    // login
    app.route("/login").post(this.authController.login);

    // login
    app.route("/register").post(this.registerController.register);
  }
}

export default Routes;
