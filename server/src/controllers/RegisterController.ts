import { Request, Response } from "express";
import { User } from "../models";

class RegisterController {
  private userModel: User;

  constructor() {
    this.userModel = new User();
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
      res.status(400).send({ message: "oops! That user already exists :(" });
      return;
    }

    // add user to database
    await this.userModel.addNewUser(email, password);

    res.status(201).send({ message: "success" });
  };
}

export default RegisterController;
