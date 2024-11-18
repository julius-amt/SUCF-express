import { Request, Response } from "express";
import path from "path";
import { readFile } from "../helpers";

export const handleHomeRoutes = (request: Request, response: Response) => {
    const pathToGreetingFIle = path.resolve(
        __dirname,
        "..",
        "public",
        "home.html"
    );
    const greetingFile = readFile(pathToGreetingFIle);
    response.setHeader("Content-Type", "text/html");
    response.send(greetingFile);
};
