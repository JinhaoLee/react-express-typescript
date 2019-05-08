import { Request, Response, NextFunction } from "express";
import { User } from "../models";
import { HttpException } from "../exceptions";

class RegisterController {
  private userModel: User;

  constructor() {
    this.userModel = new User();
  }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!(email && password)) {
      next(new HttpException(404, "Please provide email and password"));
      return;
    }

    // check if user already exists in database
    const user = await this.userModel.getUserByEmail(email);
    if (user) {
      next(new HttpException(400, "The user already exists :("));
      return;
    }

    // add user to database
    await this.userModel.addNewUser(email, password);

    res.status(201).send({ message: "success" });
  };
}

export default RegisterController;
