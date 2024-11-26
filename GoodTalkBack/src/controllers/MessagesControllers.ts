import { Request, Response } from "express";

//the first function to run when the
function init(req: Request, res: Response) {
  res.send("Hello World");
}
