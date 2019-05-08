import { Request, Response } from "express";
import { Offence } from "../models";

class SearchController {
  private offence: Offence;

  constructor() {
    this.offence = new Offence();
  }
  public search = async (req: Request, res: Response) => {
    const { query } = req;

    // check if offence is provided
    if (!query.offence) {
      res.status(400).send({ message: "Missing the offence query parm" });
      return;
    }

    // get result by querying databse
    const result = await this.offence.getOffences(query);

    res.status(200).send({ query, result });
  };
}

export default SearchController;
