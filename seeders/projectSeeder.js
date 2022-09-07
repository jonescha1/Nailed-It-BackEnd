const db = require("../models");

db.Project.create([
  {
    name: "Chicken Coop",
    details: "Build Chicken Coop",
    steps: "Steps: Get wood, nails. Build coop",
    time: 2.5,
    category: "Wood Work",
    materials: "Wood",
    cost: 100,
  },
])

  .then(() => {
    console.log("Success!");
    process.exit();
  })

  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
