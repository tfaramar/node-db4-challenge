
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {instructions: 'Melt butter in pan at medium heat until golden brown.', recipe_id: 2},
        {instructions: 'Slice cheese and layer between two slices of sourdough bread.', recipe_id: 2},
        {instructions: 'Place layered bread and cheese in pan.', recipe_id: 2},
        {instructions: 'Cook until cheese is melted and bread is browned, flipping every two minutes. Server warm and enjoy!', recipe_id: 2}
      ]);
    });
};
