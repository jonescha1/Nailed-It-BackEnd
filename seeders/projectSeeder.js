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
  {
    name: "Tv Stand",
    details: "Building a tv stand",
    steps: "1. Cut 2 of the 2x4's.",
    time: 2.5,
    category: "Wood Work",
    materials: "Wood",
    cost: 200,
  },
  {
    name: "Dog House",
    details: "Building a dog house",
    steps: "Steps: Get wood, nails. Build dog house",
    time: 2.5,
    category: "Wood Work",
    materials: "Wood",
    cost: 300,
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
