
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Golfers').del()
    .then(function () {
      // Inserts seed entries
      return knex('Golfers').insert([
        {id: 1, name: 'Dustin Johnson'},
        {id: 2, name: 'Justin Thomas'},
        {id: 3, name: 'Jordan Spieth'}
      ]);
    });
};
