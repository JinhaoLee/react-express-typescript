import knex from "../config/knexfile";
import Knex from "knex";

const environment = process.env.NODE_ENV || "development";
const config = knex[environment];

export = Knex(config);
