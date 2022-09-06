// //require mongoose
const mongoose = require("mongoose");

// //Schema constructor
 const projectSchema  = new mongoose.Schema({

    name: { type: String, required: true },
    details: { type: String, required: true },
    steps: { type: String, required: false },
    time: { type: Number , require: true },
    category: { type: String, required: true, enum: ['Metal Work, Wood Work, Crafts, Pottery, Sewing, Other'] },
    materials: { type: String, required: true},
    cost: { type: Number, required: false }

    


 });

// //Schema
//name
//details
//steps
//time
// category woodwork, metalwork, crafts
//materials
//cost
//links to materials ordered

// //model and export
 const Project = mongoose.model("Project" , projectSchema);
 module.exports = Project;
