
exports.seed = function(knex) {
  return knex('ocrmatches').del()
    .then(function () {
      return knex('ocrmatches').insert([
        {matches: 'rowValue1'},
        {matches: 'rowValue2'},
        {matches: 'rowValue3'}
      ]);
    });
};
