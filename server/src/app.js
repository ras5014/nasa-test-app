import express from "express";
import planetsRouter from "./routes/planets/planets.router.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/planets", planetsRouter);

export default app;
