const db = require('../models');

exports.createTask = async (req, res) => {
  const { title, description, due_date } = req.body;

  try {
    const task = await db.Task.create({ title, description, due_date });
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(400).json({ message: 'Error creating task', error });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await db.Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error });
  }
};

exports.getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await db.Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving task', error });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date } = req.body;

  try {
    const task = await db.Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title;
    task.description = description;
    task.due_date = due_date;
    await task.save();

    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await db.Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
};
