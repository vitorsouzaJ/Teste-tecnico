import { Request, Response } from "express";
import { response } from "../utils/response";

export class Example {
  getExampleJson = async (req: Request, res: Response) => {
    const returnValue = "Hello World";

    response(res, 200, returnValue);
  };
}
