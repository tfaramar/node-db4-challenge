
exports.seed = function(knex) {
    // Inserts seed entries
    return knex('recipes').insert([
      {recipe_name: 'Gazpacho Soup'},
      {recipe_name: 'Grilled Cheese'},
      {recipe_name: 'Tomato Frittata'}
    ]);
};
