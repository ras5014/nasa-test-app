import { Router } from "express";
import { getAllPlanets } from "./planets.controller.ts";

const planetsRouter = Router();

// Example route
planetsRouter.get("/", getAllPlanets);

export default planetsRouter;
