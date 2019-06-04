import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token =
    <string>req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    next(
      new HttpException(
        401,
        "oops! it looks like you're missing the authorization header"
      )
    );
    return;
  }

  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        message: "Token is not valid"
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

export default authMiddleware;
