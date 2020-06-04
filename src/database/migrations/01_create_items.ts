import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('item_id').primary();
        table.string('imagem').notNullable();
        table.string('titulo').notNullable();
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
};