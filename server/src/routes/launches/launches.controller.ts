import { Request, Response, NextFunction } from "express";
import { addNewLaunch, getAllLaunches } from "../../models/launches.model.ts";
import { successResponse } from "../../utils/responses.ts";

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
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    successResponse(res, launch, 201, "Launch added successfully");
  } catch (error) {
    next(error);
  }
};
