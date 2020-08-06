
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ocrmatches').del()
    .then(function () {
      // Inserts seed entries
      return knex('ocrmatches').insert([
        {id: 1, matches: 'rowValue1'},
        {id: 2, matches: 'rowValue2'},
        {id: 3, matches: 'rowValue3'}
      ]);
    });
};
