  
exports.up = function (knex, Promise) {
    return knex.schema.createTable('movies', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('movies');
};