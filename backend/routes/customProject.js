// routes/customProject.js

import express from "express";
import CustomProject from "../models/CustomProject.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, domain, budget, description } = req.body;

    if (!name || !domain || !budget || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newRequest = new CustomProject({
      name,
      domain,
      budget,
      description,
    });

    await newRequest.save();

    res.status(201).json({ message: "Request saved successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;