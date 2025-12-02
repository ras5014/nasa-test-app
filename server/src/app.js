import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import planetsRouter from "./routes/planets/planets.router.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());

// Logging
app.use(morgan("combined"));

app.use(express.json());

// Serve static files / frontend build
app.use(express.static(path.resolve("public")));

// Frontend Routes
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

// Backend Routes
app.use("/api/v1/planets", planetsRouter);

export default app;
