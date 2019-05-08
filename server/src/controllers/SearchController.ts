import { Request, Response } from "express";

class SearchController {
  constructor() {}
  public search = async (req: Request, res: Response) => {
    // check if offence is provided
    if (!req.query.offence) {
      res.status(400).send({ message: "Missing the offence query parm" });
      return;
    }

    for (const key in req.query) {
      console.log(key, req.query[key]);
    }

    res.status(200).send({ message: "success" });
  };
}

export default SearchController;
