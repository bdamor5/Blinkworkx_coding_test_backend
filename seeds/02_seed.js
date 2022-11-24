/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await Promise.all([
    knex("orders").del(),
    knex("products").del(),
    knex("orderproductmap").del(),
  ]);

  await Promise.all([
    knex("products").insert([
      {
        Id: 1,
        productName: "HP Laptop",
        productDescription: {"desc":"This is HP Laptop"},
      },
      {
        Id: 2,
        productName: "lenovo Laptop",
        productDescription: {"desc":"This is lenovo"},
      },
      {
        Id: 3,
        productName: "Car",
        productDescription: {"desc":"This is Car"},
      },
      {
        Id: 4,
        productName: "Bike",
        productDescription: {"desc":"This is Bike"},
      },
    ]),
  ]);
};
