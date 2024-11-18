import { Request, Response } from "express";
import { users } from "../data/users";
import { logger } from "../helpers";

export const getUsers = (request: Request, response: Response) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/style.css">
            <title>User List</title>
        </head>
        <body>
            <div class="container">
                <h1>Senior Devs</h1>
                <hr>
                <div class="user-list">
                    ${users
                        .map(
                            (user) => `
                            <div class="user-card">
                                <h2>${user.name}</h2>
                                <p><strong>Username:</strong> ${user.username}</p>
                                <p><strong>Email:</strong> ${user.email}</p>
                                <p><strong>Phone:</strong> ${user.phone}</p>
                            </div>`
                        )
                        .join("")}
                </div>
            </div>
        </body>
        </html>
`;
    response.setHeader("Content-Type", "text/html");
    response.status(200).send(html);
};

export const createUser = (request: Request, response: Response) => {
    let { username } = request.body;
    // handle empty username
    username = username.trim() as string;
    if (!username || typeof username !== "string") {
        response.status(400).send("Invalid username");
    }
    logger(username);

    // add to the users
    const newUser = {
        id: users.length + 1,
        name: username,
        username,
        email: `${username}@gmail.me`,
        phone: `+234 80${users.length + 1} 123 4567`,
    };
    users.push(newUser);

    response.redirect("/");
};
