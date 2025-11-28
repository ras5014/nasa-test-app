import { Router } from "express";
import { getAllPlanets } from "./planets.controller.js";

const planetsRouter = Router();

// Example route
planetsRouter.get("/", getAllPlanets);

export default planetsRouter;
