exports.up = function (knex) {
    return Promise.all([
      knex.schema.createTable("orders", (table) => {
        table.increments("Id").primary(); //Primary key
        table.string("orderDescription", 100).notNullable(); //VARCHAR 100
        table.json('productIdArray');
        table.specificType('createdAt','character varying');
      }),
      knex.schema.createTable("products", (table) => {
        table.integer("Id").primary(); //Primary key
        table.string("productName", 100).notNullable(); //VARCHAR 100
        table.json("productDescription").notNullable(); //JSON
      }),
      knex.schema.createTable("orderproductmap", (table) => {
        table.increments("Id").primary(); //Primary key
        table
          .integer("orderId", 100)
          .references("Id")
          .inTable("orders")
          .notNullable();
        table
          .integer("productId", 100)
          .references("Id")
          .inTable("products")
          .notNullable();
      }),
    ]);
  };
  
  exports.down = function (knex) {
    return Promise.all([
      knex.schema.dropTable("orders"),
      knex.schema.dropTable("products"),
      knex.schema.dropTable("orderproductmap"),
    ]);
  };
  