import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();

// CORS headers for all routes
app.use((req, res, next) => {
  const allowedOrigin = "https://mdalif999.github.io";
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    res.status(204).end();
  } else {
    next();
  }
});

  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });


  // Gemini API Proxy
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key not configured" });
      }

      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      
      const result = await ai.models.generateContent({ 
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are an AI assistant for MD Alif's portfolio website. 
          Alif is a creative engineer focused on building high-performance web applications.
          His skills include React, TypeScript, Node.js, and UX Design.
          Be professional, creative, and concise. 
          If someone asks about his projects, mention Quantum Dashboard, EcoSphere AI, Aura Creative, and Nova Engine.`
        },
        contents: message
      });

      res.json({ text: result.text });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
