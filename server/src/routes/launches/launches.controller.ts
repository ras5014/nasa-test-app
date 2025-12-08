import type { Request, Response, NextFunction } from "express";
import {
  abortLaunch,
  addNewLaunch,
  getAllLaunches,
} from "../../models/launches.model.ts";
import { successResponse } from "../../utils/responses.ts";
import { newLaunchSchema } from "./launches.types.ts";

export const httpGetAllLaunches = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = getAllLaunches();
    successResponse(res, data, 200, "Launches retrieved successfully");
  } catch (error) {
    next(error);
  }
};

export const httpAddNewLaunch = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const launch = newLaunchSchema.parse(req.body);
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    successResponse(res, launch, 201, "Launch added successfully");
  } catch (error) {
    next(error);
  }
};

export const httpAbortLaunch = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const flightNumber = Number(req.params.id);
    const abortedLaunch = abortLaunch(flightNumber);
    successResponse(res, abortedLaunch, 200, "Launch aborted successfully");
  } catch (error) {
    next(error);
  }
};
