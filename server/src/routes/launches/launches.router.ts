import { Router } from "express";
import { httpAddNewLaunch, httpGetAllLaunches } from "./launches.controller.ts";

const launchRouter = Router();

launchRouter.get("/", httpGetAllLaunches);
launchRouter.post("/", httpAddNewLaunch);

export default launchRouter;
