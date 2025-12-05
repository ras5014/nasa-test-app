import { Router } from "express";
import {
  httpAbortLaunch,
  httpAddNewLaunch,
  httpGetAllLaunches,
} from "./launches.controller.ts";

const launchRouter = Router();

launchRouter.get("/", httpGetAllLaunches);
launchRouter.post("/", httpAddNewLaunch);
launchRouter.delete("/:id", httpAbortLaunch);

export default launchRouter;
