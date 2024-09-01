
# Net Worth Calculator

The **Net Worth Calculator** is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register and log in using JWT-based authentication. Once authenticated, users can input detailed assets and liabilities via REST APIs to calculate their net worth. The application provides a rich interface for calculating financial information and includes comprehensive unit testing for the backend using Jest and Supertest.


## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **Vite**: For fast build tooling and development.
- **Tailwind CSS**: For utility-first CSS styling.
- **Axios**: For making API requests to the backend.
- **React Router**: For routing and navigation between pages.
- **Headless UI & Heroicons**: For accessible and customizable UI components.

### Backend:
- **Node.js**: As the runtime environment.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For storing user data, assets, liabilities, and net worth calculations.
- **Mongoose**: For object data modeling (ODM) with MongoDB.
- **JWT**: For secure user authentication and session management.
- **bcryptjs**: For password hashing and security.
- **Jest & Supertest**: For backend unit and integration testing.


## Features

- **User Authentication**:
  - Secure user registration and login using JWT (JSON Web Tokens).
  - Passwords are hashed using bcrypt for enhanced security.
  - JWT tokens are used for authentication and authorization.

- **Net Worth Calculation**:
  - Users can input detailed financial information, including various assets and liabilities.
  - Real-time calculation of net worth based on user inputs.
  - Supports a wide range of asset and liability types for comprehensive financial tracking.

- **RESTful APIs**:
  - **Authentication APIs**:
    - **POST /api/auth/register**: Register a new user.
    - **POST /api/auth/login**: Authenticate and obtain a JWT token.
  - **User APIs**:
    - **GET /api/user/profile**: Retrieve user profile information.
  - **Net Worth APIs**:
    - **POST /api/networth**: Submit assets and liabilities for net worth calculation.
    - **GET /api/networth**: Fetch calculated net worth data.

- **Responsive User Interface**:
  - Built with React and styled using Tailwind CSS for a modern and responsive design.
  - Intuitive UI/UX for ease of use across devices, including desktops, tablets, and mobile phones.

- **Protected Routes**:
  - Certain pages, such as the dashboard, are accessible only to authenticated users.
  - Uses React Router for client-side routing and navigation.

- **Unit Testing**:
  - Backend unit and integration tests are implemented using Jest and Supertest.
  - Ensures the reliability and correctness of API endpoints and application logic.

- **Error Handling**:
  - Graceful error handling for user input validation, API errors, and authentication issues.
  - Provides user-friendly error messages and feedback.

- **Data Security**:
  - Sensitive data is stored securely in MongoDB.
  - JWT tokens are used to protect user sessions and restrict access to authenticated users only.

- **Deployment Ready**:
  - The application is designed for easy deployment on cloud platforms such as Vercel (frontend) and Render.com (backend).
## Acknowledgements

I would like to extend my gratitude to the following projects and libraries that were instrumental in the development of this application:

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces. Its component-based architecture was essential for creating the dynamic frontend of the application.
- **[Vite](https://vitejs.dev/)**: A fast build tool that significantly improved development speed and efficiency.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that facilitated the creation of a responsive and modern design.
- **[Headless UI](https://headlessui.dev/)**: Provides completely unstyled, fully accessible UI components that integrate seamlessly with Tailwind CSS.
- **[Heroicons](https://heroicons.com/)**: A collection of free, MIT-licensed high-quality SVG icons used to enhance the user interface.
- **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making API requests, simplifying communication between the frontend and backend.
- **[Node.js](https://nodejs.org/)**: A JavaScript runtime that allowed for the development of the backend server.
- **[Express.js](https://expressjs.com/)**: A web framework for Node.js that facilitated the creation of RESTful APIs.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database that provided a flexible and scalable solution for storing user data and financial information.
- **[Mongoose](https://mongoosejs.com/)**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to model and interact with data.
- **[JWT](https://jwt.io/)**: A compact, URL-safe means of representing claims to be transferred between two parties, used for secure authentication.
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)**: A library to hash passwords, ensuring secure user authentication.
- **[Jest](https://jestjs.io/)**: A delightful JavaScript testing framework used for unit testing and ensuring the reliability of the backend.
- **[Supertest](https://github.com/visionmedia/supertest)**: A testing library for HTTP assertions, used alongside Jest for API testing.

Thank you to the open-source community for providing these valuable tools and libraries, which greatly contributed to the development and success of this project.
## Installation

To get started with the **Net Worth Calculator** application, follow these steps to set up the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher) installed
- [MongoDB](https://www.mongodb.com/) installed locally or accessible via a cloud provider like MongoDB Atlas

### Setup Instructions

1. **Clone the Repository**

   Clone the repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/your-username/net-worth-calculator.git
   cd net-worth-calculator
## API Reference

The **Net Worth Calculator** application provides several RESTful API endpoints to manage user authentication, assets, liabilities, and net worth calculations. Below is a detailed reference of the available endpoints.

### Authentication

- **POST /api/auth/register**
  
  Register a new user.

  **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }

## Authors

- [Hanu Singh](https://github.com/iknowaditya)


## Badges


![Build Status](https://img.shields.io/github/workflow/status/your-username/net-worth-calculator/CI)
![Test Coverage](https://img.shields.io/codecov/c/github/iknowaditya/net-worth-calculator)
![License](https://img.shields.io/github/license/iknowaditya/net-worth-calculator)

## Screenshots


![App Screenshot](https://github.com/iknowaditya/URLshortener-app/assets/97401096/df7fb33e-a458-4e99-8434-66be44815028)

![App Screenshot](https://github.com/iknowaditya/URLshortener-app/assets/97401096/983f4e72-48dc-47d5-b15d-12d56aef5d52)

![App Screenshot](https://github.com/iknowaditya/URLshortener-app/assets/97401096/983f4e72-48dc-47d5-b15d-12d56aef5d52)

![App Screenshot](https://github.com/iknowaditya/URLshortener-app/assets/97401096/983f4e72-48dc-47d5-b15d-12d56aef5d52)
## Usage

Here’s how to use the **Net Worth Calculator** application, including examples for both the frontend and backend.

### Frontend

Once you have the application running locally (see [Installation](#installation)), you can interact with it through the web interface.

#### User Registration

1. Navigate to the registration page at `http://localhost:3000/register`.
2. Fill in the registration form with your name, email, and password.
3. Click the "Register" button to create a new account.

#### User Login

1. Navigate to the login page at `http://localhost:3000/login`.
2. Enter your email and password.
3. Click the "Login" button to authenticate and gain access to your profile.

#### Calculating Net Worth

1. Log in to your account.
2. Navigate to the net worth calculation page at `http://localhost:3000/networth`.
3. Enter details for your assets and liabilities.
4. Click the "Calculate" button to see your net worth.

### Backend

You can interact with the backend APIs using tools like Postman or cURL. Below are some example requests.

#### User Registration

**Endpoint**: `POST /api/register`

**Request**:
```bash
curl -X POST http://localhost:5000/api/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}'

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI=your_mongodb_connection_string`

`JWT_SECRET=your_jwt_secret`


## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Contributing

We welcome contributions to the **Net Worth Calculator** project! If you would like to contribute, please follow these guidelines:

### How to Contribute

1. **Fork the Repository**: Start by forking the repository to your own GitHub account. This will create a copy of the project where you can make your changes.

2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/net-worth-calculator.git
   cd net-worth-calculator
