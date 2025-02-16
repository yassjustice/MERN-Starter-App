# MERN Full-Stack Project Setup Script

This script automates the creation of a **MERN (MongoDB, Express, React, Node.js)** stack project with a structured backend and frontend. It will:

- Create a **server** directory with necessary configurations, routes, controllers, and models.
- Install required backend dependencies.
- Set up a **client** directory using **Vite** with React.
- Install required frontend dependencies.
- Prompt the user to choose **React** as the frontend framework.
- Prompt the user to choose between **JavaScript (js)** or **TypeScript (ts)**.

## How to Run

1. **Ensure you have Node.js installed**
   - You can check by running: `node -v`
   - If not installed, download it from [nodejs.org](https://nodejs.org/).

2. **Run the script**
   - Open a terminal and navigate to your desired project directory.
   - Execute the script:
     ```sh
     node createAllFiles.mjs
     ```

3. **Follow the prompts**
   - You will be asked to select **React** from a list of frameworks.
   - Then, you will choose the programming language: **JavaScript (js)** or **TypeScript (ts)**.

## Project Structure

```
project-folder/
│── server/        # Backend (Express, MongoDB, JWT authentication)
│── client/        # Frontend (React, Vite, API integration)
```

### Backend Includes:
- **Express server with MongoDB connection**
- **User authentication with JWT**
- **Folder structure for models, controllers, services, routes, and middleware**
- **.env configuration**

### Frontend Includes:
- **React setup using Vite**
- **React Router for navigation**
- **API service for backend communication**

## Running the Project

Once the setup completes:

### Start the Backend:
```sh
cd server
npm run dev
```

### Start the Frontend:
```sh
cd client
npm run dev
```

Then, open `http://localhost:5173/` in your browser to access the application.

## Notes
- **MongoDB**: Ensure you have a MongoDB instance running and update the `.env` file with your database connection string.
- **JWT Authentication**: The project uses JWT tokens for authentication.
- **Customization**: Feel free to modify the generated files to fit your project needs.

### Happy Coding! 🚀

