
---

# User Management API

## Overview

This project is a simple REST API for managing users and their associated houses. The API is built using Node.js, Express, and a JSON server as an ultralight in-memory database. Additionally, Swagger UI is integrated for API documentation and testing.

## Features

- Retrieve all users
- Retrieve a single user
- Retrieve all houses of a user
- Retrieve all houses of a user with optional filters (city, street, country)
- Create a new user
- Update a user (partial and complete)
- Delete a user (with validation for existing houses)
- Create, update, and delete houses for a user

## Technologies

- Node.js
- Express
- JSON Server
- Swagger UI

## Installation

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SilviuManea/API_REST.git
   cd API_REST
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   npm run start
   ```

4. **Access the API documentation:**
   Open your browser and navigate to `http://localhost:3000/api-docs` to view and interact with the API using Swagger UI.

## API Endpoints

### Users

- **GET /users**
  - Retrieve a list of all users

- **POST /users**
  - Create a new user

- **GET /users/{id}**
  - Retrieve a single user by ID

- **PATCH /users/{id}**
  - Update a user partially by ID

- **PUT /users/{id}**
  - Update a user completely by ID

- **DELETE /users/{id}**
  - Delete a user by ID (only if no houses are associated)

### Houses

- **GET /users/{id}/houses**
  - Retrieve all houses of a user

- **GET /users/{id}/houses?city={city}&street={street}&country={country}**
  - Retrieve houses of a user with optional filters

- **POST /users/{id}/houses**
  - Create a new house for a user

- **PATCH /users/{id}/houses/{houseId}**
  - Update a house partially by house ID

- **PUT /users/{id}/houses/{houseId}**
  - Update a house completely by house ID

- **DELETE /users/{id}/houses/{houseId}**
  - Delete a house by house ID

## Project Structure

```
.
├── app.js
├── db.json
├── package.json
├── README.md
├── server.js
└── swaggerDef.js
```

- `app.js`: Main application file, contains server setup and routes.
- `db.json`: In-memory database file used by JSON Server.
- `package.json`: Project dependencies and scripts.
- `README.md`: Project documentation.
- `server.js`: JSON Server configuration file.
- `swaggerDef.js`: Swagger documentation configuration file.

## Swagger Documentation

The API is documented using Swagger. To view the documentation, run the server and navigate to `http://localhost:3000/api-docs`. You can interact with the API endpoints directly from the Swagger UI.


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
