const fs = require("fs");
const path = require("path");

// Loading tasks from JSON file
const tasks = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "task.json"))
);

// Controller to get all tasks

const getAllTasks = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tasks.length,
    data: { tasks }
  });
};

// Controller to get a task by ID

const getTask = (req, res) => {
   const id = parseInt(req.params.id);
  const task = tasks.find(el => el.id === id);
  
  if (!task) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }

  res.status(200).json(task); // Match test expectations
};


// Controller to create a task

const createTask = (req, res) => {
 const newId = tasks[tasks.length - 1].id + 1;
 const newTask = Object.assign({id:newId}, req.body);
 tasks.push(newTask);
 fs.writeFile(`${__dirname}/.task.json`,JSON.stringify(tasks), err => {
 res.status(201).json({
    status:'success',
    data:{ newTask }
 })
 })
};

// Controller to update a task

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Task not found",
    });
  }

  // Validating the input
  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid data format",
    });
  }

  // Updating the task
  tasks[taskIndex] = {
    id,
    title,
    description,
    completed,
  };

  // Persist changes
  fs.writeFile('./task.json', JSON.stringify(tasks), (err) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Could not save updated task',
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        task: tasks[taskIndex],
      },
    });
  });
};

// Controller to delete a task

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Task not found"
    });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ status: "success", message: "Task deleted successfully" });
};



module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
