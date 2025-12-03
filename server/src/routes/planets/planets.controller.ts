import { Request, Response } from "express";
import { habitablePlanets } from "../../models/planets.model.ts";
import { successResponse } from "../../utils/responses.ts";

export const getAllPlanets = (req: Request, res: Response) => {
  successResponse(res, habitablePlanets, 200, "Planets retrieved successfully");
};
