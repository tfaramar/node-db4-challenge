
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
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); 
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
        .inTable('recipes')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE');
    tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl 
        .float('quantity')
        .unsigned()
        .notNullable();
    tbl.primary(['recipe_id', 'ingredient_id', 'quantity'])
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
