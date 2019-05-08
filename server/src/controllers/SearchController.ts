import { Request, Response, NextFunction } from "express";
import { Offence } from "../models";
import { HttpException } from "../exceptions";

class SearchController {
  private offence: Offence;

  constructor() {
    this.offence = new Offence();
  }

  public search = async (req: Request, res: Response, next: NextFunction) => {
    const { query } = req;

    // check if offence is provided
    if (!query.offence) {
      next(new HttpException(400, "Missing the offence query parm"));
      return;
    }

    // get result by querying databse
    let result;
    try {
      result = await this.offence.getOffences(query);
    } catch (error) {
      next(new HttpException(400, error.message));
      return;
    }

    res.status(200).send({ query, result });
  };
}

export default SearchController;
