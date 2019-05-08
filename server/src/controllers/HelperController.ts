import { Request, Response } from "express";
import { Offence } from "../models";

class HelperController {
  private offence: Offence;

  constructor() {
    this.offence = new Offence();
  }

  public getOffences = async (_req: Request, res: Response) => {
    const offences = (await this.offence.getOffenceList()).map(
      (offence: { pretty: string }) => offence.pretty
    );
    res.status(200).send({ offences });
  };

  public getAreas = async (_req: Request, res: Response) => {
    const offences = (await this.offence.getAreaList()).map(
      (offence: { area: string }) => offence.area
    );
    res.status(200).send({ offences });
  };

  public getAges = async (_req: Request, res: Response) => {
    const offences = (await this.offence.getAgeList()).map(
      (offence: { age: string }) => offence.age
    );
    res.status(200).send({ offences });
  };

  public getGenders = async (_req: Request, res: Response) => {
    const offences = (await this.offence.getGenderList()).map(
      (offence: { gender: string }) => offence.gender
    );
    res.status(200).send({ offences });
  };

  public getYears = async (_req: Request, res: Response) => {
    const offences = (await this.offence.getYearList()).map(
      (offence: { year: string }) => offence.year
    );
    res.status(200).send({ offences });
  };
}

export default HelperController;
