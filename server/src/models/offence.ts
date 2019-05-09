import knex from "../db/knex";

type Query = {
  offence: string;
  area: string | null;
  age: string | null;
  gender: string | null;
  year: string | null;
  month: string | null;
};

class Offence {
  public getOffences = async (query: Query) => {
    const { offence, area, age, gender, year, month } = query;
    const offenceNameRows = await knex("offence_columns")
      .select("column")
      .where("pretty", offence);

    if (!offenceNameRows[0]) {
      throw new Error("Offence name not found");
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
        // TODO: need to rebuild
        if (area) {
          queryBuilder.where("offences.area", area);
        }
        if (age) {
          queryBuilder.where("offences.age", age);
        }
        if (gender) {
          queryBuilder.where("offences.gender", gender);
        }
        if (year) {
          queryBuilder.where("offences.year", year);
        }
        if (month) {
          queryBuilder.where("offences.year", month);
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
