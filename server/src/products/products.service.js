import knex from "../db/connection.js";

function list() {
  return knex("products").select("*").orderBy("product_id");
}

function read(id) {
  return knex("products").select("*").where("product_id", id).first();
}

function updateLike({ product_id, likes }) {
  return knex("products")
    .where({ product_id })
    .update({ likes })
    .returning("*")
    .then((updatedRecords) => updatedRecords[0]);
}

export default {
  list,
  read,
  updateLike,
};
