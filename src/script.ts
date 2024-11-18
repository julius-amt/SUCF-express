import express from "express";
import { handleHomeRoutes } from "./routes/home";
import { getUsers, createUser } from "./routes/users";
import { handle404 } from "./routes/404";
import { logger } from "./helpers";
import path from "path";
import morgan from "morgan";

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("dev"));

const PORT = 3000;

app.get("/", handleHomeRoutes);

app.get("/users", getUsers);

app.post("/create-user", createUser);

// handle 404
app.use(handle404);

app.listen(PORT, () => {
    logger(`Server is running on http://localhost:${PORT}`);
});
