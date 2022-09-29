const environment = process.env.NODE_ENV || "development";

import config from "../../knexfile.js";
import knex from "knex";

let envVar = config[environment];
const myKnex = knex(envVar)
export default myKnex;
