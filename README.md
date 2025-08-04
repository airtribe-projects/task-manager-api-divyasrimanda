# Task Manager API

A simple RESTful Task Manager API built with Node.js and Express that allows users to create, read, update, and delete tasks.

---

## 📌 Overview

This project is part of the **AirTribe Backend Engineering assignment**. It provides a basic API to manage a list of tasks stored in a local JSON file. The API supports CRUD operations:

- **Create** a new task
- **Read** all tasks or a single task
- **Update** an existing task
- **Delete** a task

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v18 or above)
- npm (Node Package Manager)

-----------------------------------------------------------------------------------------------------------------------------

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/airtribe-projects/task-manager-api-divyasrimanda/blob/master/app.js
   cd task-manager-api

----------------------------------------------------------------------------------------------------------------

2. Install dependencies:
   ```npm install

-------------------------------------------------------------------------------------------------------------------

3. Start the server:
   ```npm run dev

--------------------------------------------------------------------------------------------------------------------

4. Server will start on:
   ```http://localhost:3000

----------------------------------------------------------------------------------------------------------------

5. 🛠 API Endpoints
   ```All routes are prefixed with /api/v1/tasks.
   ``` Use Postman or curl to test the endpoints.
   1. Get All Tasks
   Method: GET
   URL: /api/v1/tasks
   Description: Fetches all tasks
   Response:
            {
            "status": "success",
            "results": 3,
            "data": {
                "tasks": [ ... ]
            }
            }
    2. Get Task by ID
    Method: GET
    URL: /api/v1/tasks/:id
    Description: Fetches a task by its ID
    Response:
            {
            "status": "success",
            "data": {
                "task": {
                "id": 1,
                "title": "Task title",
                "description": "Task description",
                "completed": false
                }
            }
            }
    3. Create a Task
    Method: POST
    Description: Adds a new task
    Body:
        {
        "title": "New Task",
        "description": "Task details",
        "completed": false
        }
    Response:
        {
        "status": "success",
        "data": {
            "task": { ... }
        }
        }

    4.Update a Task
    Method: PUT
    URL: /api/v1/tasks/:id
    Description: Updates an existing task
    Body:
        {
        "title": "Updated Task",
        "description": "Updated description",
        "completed": true
        }
    Response:
        {
        "status": "success",
        "data": {
            "task": { ... }
        }
        }
    5.Delete a Task
    Method: DELETE
    URL: /api/v1/tasks/:id
    Description: Deletes a task
    Response:
        {
        "status": "success",
        "message": "Task deleted successfully"
        }
------------------------------------------------------------------------------------------------------
    📁 Folder Structure
        task-manager-api/
        ├── controllers/
        │   └── taskController.js
        ├── routes/
        │   └── taskRoutes.js
        ├── task.json
        ├── app.js
        ├── package.json
        └── README.md

