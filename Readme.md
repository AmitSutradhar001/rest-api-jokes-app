# REST API Jokes App

## Overview

This project is a REST API for retrieving and managing jokes. It is built using Express.js and MongoDB, including support for CORS. The app is deployed on Render.

## Features

- Fetch random jokes
- Fetch jokes using ID. (The id should not be greater than 50!)
- Retrieve jokes with some limits. (The limit should not be greater than 50!)

## Technologies Used

- **MongoDB**: For storing jokes
- **Express**: Web framework for Node.js
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing
- **JavaScript**: Programming language
- **Render**: Platform for deployment

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AmitSutradhar001/rest-api-jokes-app.git
    cd rest-api-jokes-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_PASSWORD==your_mongodb_password
    ```

4. **Start the server:**
    ```bash
    npm dev
    ```

## API Endpoints

- **GET /api/:userKey**: Retrieve a random joke
- **GET /api/:userKey?id=2**: Retrieve a joke with ID.
- **GET /api/:userKey?limit=2**: Retrive jokes with limit.

## Deployment

The application is deployed on Render. You can access it at: https://rest-api-jokes-app.onrender.com


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Render](https://render.com/)
