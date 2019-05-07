import knex from "../knexfile";
import Knex from "knex";

const environment = "development";
const config = knex[environment];

export = Knex(config);
