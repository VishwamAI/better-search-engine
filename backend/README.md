# Better Search Engine - Backend

## Overview
This is the backend server for the Better Search Engine project. The backend is built using Node.js and Express.js and handles search requests for different user groups: kids, elders, and researchers. It processes search queries and returns relevant results based on custom search algorithms.

## Installation
To set up the backend server, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kasinadhsarma/better-search-engine.git
   cd better-search-engine/backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.

## Running the Server
To start the backend server, run the following command:
```bash
npm start
```
The server will be running at `http://localhost:3001`.

## API Endpoints
### POST /search
This endpoint handles search requests and returns relevant results based on the user group.

- **URL:** `/search`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "query": "search term",
    "userGroup": "kids" | "elders" | "researchers"
  }
  ```
- **Response:**
  ```json
  {
    "results": [
      {
        "title": "Result Title",
        "description": "Result Description"
      },
      ...
    ]
  }
  ```
- **Status Codes:**
  - `200 OK` - Successful search request
  - `400 Bad Request` - Invalid request body
  - `500 Internal Server Error` - Server error

## Search Algorithms
The backend uses custom search algorithms tailored for each user group. These algorithms are defined in the `searchAlgorithm.js` file.

## Contributing
If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.
