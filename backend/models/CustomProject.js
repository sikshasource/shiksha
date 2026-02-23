// models/CustomProject.js

import mongoose from "mongoose";

const customProjectSchema = new mongoose.Schema({
  name: String,
  domain: String,
  budget: String,
  description: String,
}, { timestamps: true });

export default mongoose.model("CustomProject", customProjectSchema);