exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name', 255)
        .notNullable();
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.string('instructions')
        .notNullable();
    //foreign key
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient_name', 255)
        .unique()
        .notNullable();
    tbl.string('measurement_unit', 255)
        .notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
    tbl 
        .float('quantity')
        .unsigned()
        .notNullable();

    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
