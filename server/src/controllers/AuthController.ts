import { Request, Response, NextFunction } from "express";
import { User } from "../models";
import { HttpException } from "../exceptions";
import * as jwt from "jsonwebtoken";

class AuthController {
  private userModel: User;

  constructor() {
    this.userModel = new User();
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    // check if username and password are set
    const { email, password } = req.body;
    if (!(email && password)) {
      next(new HttpException(404, "Please provide email and password"));
      return;
    }

    // get user from database
    const user = await this.userModel.getUserByEmail(email);
    if (!user) {
      next(new HttpException(401, "Invalid login - email not found"));
      return;
    }

    // check if encrypted password match
    if (!(await this.userModel.IsPasswordValid(email, password))) {
      next(new HttpException(401, "Invalid login - bad password"));
      return;
    }

    // JWT, valid for 1 hour
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // send the jwt in the response
    res.status(200).send({ message: "success", token });
  };
}

export default AuthController;
