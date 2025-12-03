import { Response } from "express";
import { errorResponse } from "../utils/responses.ts";

export const notFound = (res: Response) => {
  return errorResponse(res, 404, "Resource not found");
};
