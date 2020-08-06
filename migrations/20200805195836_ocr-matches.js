
exports.up = function(knex) {
  return knex.schema.createTable('ocrmatches', (ocrmatches) => {
    ocrmatches.increments('id')
    ocrmatches.string('matches')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ocrmatches')
};
