import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import UserModel from "../models/User";
import config from "../config/config";

class AuthController {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public login = async (req: Request, res: Response) => {
    // check if username and password are set
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send({ message: "Please provide email and password" });
      return;
    }

    // get user from database
    const user = await this.userModel.getUserByEmail(email);
    if (!user) {
      res.status(400).send({ message: "Email was not found" });
      return;
    }

    // check if encrypted password match
    if (!(await this.userModel.IsPasswordValid(email, password))) {
      res.status(400).send({ message: "Email was not found" });
      return;
    }

    // JWT, valid for 1 hour
    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    // send the jwt in the response
    res.send({ message: "success", token });
  };
}

export default AuthController;
