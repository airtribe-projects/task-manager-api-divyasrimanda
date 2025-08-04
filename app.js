const express = require('express');
const app = express();
const port = 3000;

const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Hello from server side!",
    app: "Airtribe Task Manager",
  });
});

// Use task routes under /api/v1/tasks
app.use('/api/v1/tasks', taskRoutes);

app.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
