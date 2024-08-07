const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// Create Task
router.post('/', authMiddleware, taskController.createTask);

// Get All Tasks
router.get('/', authMiddleware, taskController.getTasks);

// Get Task by ID
router.get('/:id', authMiddleware, taskController.getTask);

// Update Task
router.put('/:id', authMiddleware, taskController.updateTask);

// Delete Task
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
