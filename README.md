# Better Search Engine

## Overview
The Better Search Engine project aims to create a search engine that caters to specific user groups: kids, elders, and researchers. The search engine is designed to be advanced, privacy-focused, and user-friendly, with a clean and responsive interface.

## Features
- Advanced search algorithms tailored for different user groups
- Privacy-focused design
- Clean, intuitive, and responsive user interface
- Support for advanced search operators and multilingual content
- Voice search and image search capabilities
- Safe search filters and local search results based on the user's location
- Integration with academic databases for researchers

## Project Structure
The project is divided into two main directories:
- `frontend`: Contains the React application with Chakra UI for the user interface.
- `backend`: Contains the Node.js and Express.js server for handling search requests and integrating with external APIs.

## Setup and Installation
### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory with the following content:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:3001
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the necessary environment variables for API integrations:
   ```env
   ELDERCARE_API_USERNAME=your_eldercare_api_username
   ELDERCARE_API_PASSWORD=your_eldercare_api_password
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```

## Documentation
- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## Contributing
Contributions are welcome! Please follow the guidelines outlined in the contributing documentation.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
