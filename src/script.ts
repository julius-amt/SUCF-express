import express from "express";
import { handleHomeRoutes } from "./routes/home";
import { getUsers, createUser } from "./routes/users";
import { handle404 } from "./routes/404";
import { logger } from "./helpers";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const PORT = 3000;

app.get("/", handleHomeRoutes);

app.get("/users", getUsers);

app.post("/create-users", createUser);

// handle 404
app.use(handle404);

app.listen(PORT, () => {
    logger(`Server is running on http://localhost:${PORT}`);
});
