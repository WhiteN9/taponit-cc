/**
 * Knex configuration file.
 */
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirName = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
  DATABASE_URL_DEVELOPMENT = "postgresql://postgres@localhost/postgres",
} = process.env;

export default {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirName, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirName, "src", "db", "seeds"),
    },
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirName, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirName, "src", "db", "seeds"),
    },
  },
};
