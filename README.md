
---

# Simple User-Creation Form (Express Edition)

This is a simple user management application built with **Express.js** and **TypeScript**. It demonstrates basic routing, static file serving, and handling form submissions. The application serves a list of users, allows for adding new users, and handles 404 errors.

## Project Structure

```plaintext
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── data
│   │   └── users.ts      # Contains the list of users
│   ├── helpers.ts        # Helper functions (e.g., for reading files)
│   ├── public
│   │   ├── 404.html      # 404 error page
│   │   ├── home.html     # Home page
│   │   └── style.css     # Styles for the pages
│   ├── routes
│   │   ├── 404.ts        # 404 error handler route
│   │   ├── home.ts       # Home route handler
│   │   └── users.ts      # User routes handler
│   └── script.ts         # Main server script that sets up the Express app
└── tsconfig.json         # TypeScript configuration file
```

## Description

This application serves:
1. **Home Page**: The home page is served from `/`, and it displays a greeting message.
2. **User List**: A page accessible from `/users`, displaying a list of senior developers.
3. **Create User**: A form for creating new users by submitting a `POST` request to `/create-user`.

The app is designed using **TypeScript** for strong typing and **Express.js** for routing and middleware handling. It uses **static file serving** to serve HTML pages and a CSS file.

---

## Features

- **Home Route (`/`)**: Displays a greeting message.
- **User List Route (`/users`)**: Displays a list of users with their name, username, email, and phone.
- **Create User Route (`/create-user`)**: Allows the creation of a new user by submitting a `POST` request with a username. The new user is then added to the list.
- **404 Page**: Displays a 404 page for unknown routes with available routes listed.

---

## Setup & Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or above)
- **npm** (v6 or above)

### 1. Clone the repository

```bash
git clone https://github.com/julius-amt/SUCF-express.git
cd SUCF-express/
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

This will install:
- **Express**: The web framework used for routing and serving static files.
- **TypeScript**: A strict syntactical superset of JavaScript that adds optional static typing.
- **TypeScript typings** for Express.
- **Moragn** for logging request/response information in console


### 4. Run the Server

You can then start the server:

```bash
npm run dev
```

This will start the Express server on **http://localhost:3000**.

---

## Endpoints

### 1. Home (`/`)

**GET** request to `/`

- Serves the home page (`home.html`).

### 2. Users List (`/users`)

**GET** request to `/users`

- Displays the list of users (stored in `users.ts`).
- Shows each user’s **name**, **username**, **email**, and **phone**.

### 3. Create User (`/create-user`)

**POST** request to `/create-user`

- Accepts a form submission with a `username`.
- Creates a new user and redirects to the homepage (`/`).
- The new user gets a default email and phone based on the username.

Example request (from a form):
```html
<form action="/create-user" method="POST">
    <input type="text" name="username" placeholder="Enter username" required />
    <button type="submit">Create User</button>
</form>
```

### 4. 404 Page (`/404`)

For any invalid route, the server serves a `404.html` file with a list of available routes.

---

## Running the App in Development Mode

For development purposes, you can use **nodemon** to automatically restart the server when you make changes to the files.

1. Install **nodemon** globally:

```bash
npm install -g nodemon
```

2. Start the server with nodemon:

```bash
nodemon src/script.ts
```

This will automatically restart the server whenever you make changes to the TypeScript files.

---

## Development

### Adding a New Route

To add a new route:

1. Create a new TypeScript file inside the `src/routes` directory.
2. Define a handler for the route using `Request` and `Response` from `express`.
3. Import the handler in `src/script.ts` and use `app.use()` or `app.get()`/`app.post()` to associate the route.

---

## Testing

You can test the application by manually visiting the following URLs:

- **http://localhost:3000**: Home page
- **http://localhost:3000/users**: User list page
- **http://localhost:3000/create-user**: Create user form (you need to submit data)
- **http://localhost:3000/nonexistent-route**: 404 page

For API testing, you can use tools like **Postman** or **curl** to make `POST` requests to the `/create-user` route.

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

MIT License. See `LICENSE` for details.