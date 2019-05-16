
exports.up = function (knex, Promise) {
    return knex.schema.createTable('todo_list', col => {

        col.increments()

        col
            .string('todo')
            .notNullable()

        col
            .boolean('completed')
            .notNullable()

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('todo_list')
};
