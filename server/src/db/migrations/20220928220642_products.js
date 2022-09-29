/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id").primary();
    table.string("product_title").notNullable();
    table.string("description").notNullable();
    table.string("url").notNullable();
    table.integer("price").notNullable();
    table.integer("likes").defaultTo(0).notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("products");
}
