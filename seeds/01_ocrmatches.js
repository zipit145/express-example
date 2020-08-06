
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ocrmatches').del()
    .then(function () {
      // Inserts seed entries
      return knex('ocrmatches').insert([
        {matches: 'rowValue1'},
        {matches: 'rowValue2'},
        {matches: 'rowValue3'}
      ]);
    });
};
