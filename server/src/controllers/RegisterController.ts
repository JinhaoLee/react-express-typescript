import { Request, Response } from "express";
import UserModel from "../models/User";

class RegisterController {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send({ message: "Please provide email and password" });
      return;
    }

    // check if user already exists in database
    const user = await this.userModel.getUserByEmail(email);
    if (user) {
      res.status(400).send({ message: "You already registered" });
      return;
    }

    // add user to database
    await this.userModel.addNewUser(email, password);

    res.send({ message: "success" });
  };
}

export default RegisterController;
