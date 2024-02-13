import { Application, Request, Response } from "express";
import { logger } from "../middleware/logger";
import { response } from "../utils/response";
import exampleRoutes from "./example";

export default (app: Application) => {
  app.all("/", logger, async (req: Request, res: Response) => {
    response(res, 200, "OK");
  });

  app.use("/example", logger, exampleRoutes);
};
