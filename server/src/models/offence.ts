import knex from "../db/knex";

type Query = {
  offence: string;
  area: string | undefined;
  age: string | undefined;
  gender: string | undefined;
  year: string | undefined;
  month: string | undefined;
};

class Offence {
  public getOffences = async (query: Query) => {
    const { offence, area, age, gender, year, month } = query;
    const params = { area, age, gender, year, month };
    const offenceNameRows = await knex("offence_columns")
      .select("column")
      .where("pretty", offence);

    if (!offenceNameRows[0]) {
      throw new Error("Offence not found");
    }

    const offenceName = offenceNameRows[0].column;

    const offenceRows = await knex("offences")
      .select(
        "offences.area as LGA",
        knex.raw("sum(??) as total", [offenceName]),
        knex.raw("ANY_VALUE(areas.lat) as lat"),
        knex.raw("ANY_VALUE(areas.lng) as lng")
      )
      .join("areas", { "areas.area": "offences.area" })
      .modify(queryBuilder => {
        for (const [key, value] of Object.entries(params)) {
          if (value !== undefined) {
            const paramList = value.split(",");
            if (paramList.length > 1) {
              queryBuilder.whereIn(`offences.${key}`, paramList);
            } else {
              queryBuilder.where(`offences.${key}`, paramList[0]);
            }
          }
        }
      })
      .groupBy("offences.area");

    return offenceRows;
  };

  public getOffenceList = async () => {
    return await knex("offence_columns").distinct("pretty");
  };

  public getAreaList = async () => {
    return await knex("offences").distinct("area");
  };

  public getAgeList = async () => {
    return await knex("offences").distinct("age");
  };

  public getGenderList = async () => {
    return await knex("offences").distinct("gender");
  };

  public getYearList = async () => {
    return await knex("offences").distinct("year");
  };
}

export default Offence;
