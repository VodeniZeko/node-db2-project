exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("sales")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("sales").insert([
        {
          id: 1,
          customer: "Edvin Saletovic",
          customer_phone: "123123123",
          sale_price: 30099.23,
          vin: "9898767564"
        }
      ]);
    });
};
