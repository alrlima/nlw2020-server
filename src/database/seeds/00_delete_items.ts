import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").delete();
}
