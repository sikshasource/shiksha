import express from "express";
import { spawn } from "child_process";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Spawn Python process
    const pythonProcess = spawn("python", ["chatbot.py", message]);

    let result = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        console.error("Python Error:", errorOutput);
        return res.status(500).json({
          message: "Chatbot processing failed",
        });
      }

      return res.json({ reply: result.trim() });
    });
  } catch (error) {
    console.error("Chat Route Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;