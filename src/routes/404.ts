import path from "path";
import { Request, Response } from "express";
import { readFile } from "../helpers";

export const handle404 = (request: Request, response: Response) => {
    const pathTo404File = path.join(__dirname, "../public/404.html");
    const file = readFile(pathTo404File);
    response.status(404).send(file);
};
