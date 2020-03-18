exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "12345678901234567",
          make: "bmw",
          model: "x5",
          mileage: 60.42
        },
        {
          id: 2,
          vin: "12345678901234568",
          make: "audi",
          model: "a8",
          mileage: 18.42
        },
        {
          id: 3,
          vin: "12345678901234569",
          make: "VW",
          model: "passat",
          mileage: 13.49
        }
      ]);
    });
};
