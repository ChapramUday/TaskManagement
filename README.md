# Task Management System

## Overview

This is a simple task management system built using Node.js, Express, and MongoDB. The application allows users to perform CRUD operations on tasks, each having a title, description, and status (e.g., "To Do," "In Progress," "Done"). The API follows RESTful principles and is designed with best practices in mind, ensuring modularity, maintainability, and security.

## Features

- **Add, Update, and Delete Tasks**: Users can create new tasks, modify existing ones, and delete tasks that are no longer needed.
- **Task Status Management**: Each task has a status that helps in tracking its progress.
- **RESTful API**: The application provides an API that adheres to REST principles, making it easy to integrate with other services or front-end applications.
- **Input Validation and Security**: The application sanitizes inputs and handles errors effectively to prevent security vulnerabilities.
- **Unit Testing with Jest**: Critical functions are covered by unit tests to ensure the application works as expected.
- **Documentation**: The API is documented using Swagger/OpenAPI, making it easy to understand and use.

## Project Structure

```plaintext
project-root/
│
├── server/                    # Backend code
│   ├── config/                # Configuration files
│   │   └── db.js              # Database connection configuration
│   ├── controllers/           # API request handlers
│   │   └── taskController.js  # Controller for task operations
│   ├── models/                # Mongoose schemas
│   │   └── taskModel.js       # Schema for the Task object
│   ├── routes/                # API routes
│   │   └── taskRoutes.js      # Routes for task-related operations
│   ├── middleware/            # Custom middleware
│   ├── tests/                 # Unit tests
│   │   └── task.test.js       # Unit tests for task functionality
│   └── server.js              # Main server file
│
└── README.md                  # Project documentation
```

## Installation
### Prerequisites
* Node.js (v14 or later)
* MongoDB (local or Atlas)

### Steps
1. Clone the Repository
```
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```
2. Install Backend Dependencies
```
cd server
npm install
```
3. Environment Variables
Create a .env file in the server directory and configure the following variables:
```
MONGO_URI=mongodb://localhost:27017/taskManagerDB
PORT=3000
```
4. Run the Server
```
npm start
```
5. Running Unit Tests
```
npm test
```
6. Accessing the API

The server will start on http://localhost:3000. You can use Postman or any other API client to interact with the API.

* Get All Tasks: GET /api/tasks
* Create a New Task: POST /api/tasks
* Update a Task: PUT /api/tasks/:id
* Delete a Task: DELETE /api/tasks/:id

## API Endpoints
| Method|Endpoint|Description|
|---|---|---|
|GET|	/api/tasks|	Retrieve all tasks|
|POST|	/api/tasks|	Create a new task|
|PUT|	/api/tasks/|Update an existing task|
|DELETE|	/api/tasks/|Delete a task|

## Task Schema
Tasks are stored in MongoDB using the following schema:
'''
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do'
    }
});

const Task = mongoose.model('Task', taskSchema);
'''
## Example JSON for Creating a Task
```
{
  "title": "Complete documentation",
  "description": "Write the README file for the project",
  "status": "In Progress"
}
```
## Common Issues
* MongoDB Connection Error: Ensure MongoDB is running and the MONGO_URI in .env is correct.
* 404 Errors: Ensure the API routes in your requests match the routes defined in your Express app.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
```

This `README.md` file gives a comprehensive overview of your task management system, including the project structure, installation steps, API documentation, and more. Adjust the repository link and any other details specific to your project.
```

