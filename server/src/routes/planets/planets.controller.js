import { successResponse } from "../../utils/responses.js";
import { habitablePlanets } from "../../models/planets.model.js";

export const getAllPlanets = (req, res) => {
  successResponse(res, habitablePlanets, 200, "Planets retrieved successfully");
};
