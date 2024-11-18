import path from "path";
import fs from "fs";

export const readFile = (filePath: string): string => {
    return fs.readFileSync(filePath, "utf-8");
};

export const logger = (message: any) => console.log(message);
