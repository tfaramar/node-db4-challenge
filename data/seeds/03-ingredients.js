
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Cheddar Cheese', measurement_unit: 'grams'},
        {ingredient_name: 'Butter', measurement_unit: 'tablespoons'},
        {ingredient_name: 'Sourdough Bread', measurement_unit: 'slices'},
        {ingredient_name: 'Eggs', measurement_unit: 'eggs'},
        {ingredient_name: 'Tomatoes', measurement_unit: 'lbs'},
        {ingredient_name: 'Thyme', measurement_unit: 'sprigs'},
        {ingredient_name: 'Cucumber', measurement_unit: 'lbs'},
        {ingredient_name: 'Salt', measurement_unit: 'teaspoons'},
        {ingredient_name: 'Sherry Vinegar', measurement_unit: 'cups'}
      ]);
    });
};
