import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/responses.ts";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";
  errorResponse(res, statusCode, message);
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  return errorResponse(res, 404, "Resource not found");
};
