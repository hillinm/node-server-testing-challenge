
exports.up = function(knex) {
  return knex.schema.createTable('Golfers', tbl => {
      tbl.increments('id'),
      tbl.string('name').notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Golfers')
};
