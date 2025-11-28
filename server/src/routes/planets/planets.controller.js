import { successResponse } from "../../utils/responses.js";
import { planets } from "../../models/planets.model.js";

export const getAllPlanets = (req, res) => {
  successResponse(res, planets, 200, "Planets retrieved successfully");
};
