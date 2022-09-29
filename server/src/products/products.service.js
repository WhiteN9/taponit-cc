import knex from "../db/connection.js";

function list() {
  return knex("products").select("*").orderBy("product_id");;
}

function read(id) {
  return knex("products").select("*").where("product_id", id).first();
}

function updateLike(updateLike) {
  return knex("products")
    .where({ product_id: updateLike.product_id })
    .update(updateLike, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

export default {
  list,
  read,
  updateLike,
};
