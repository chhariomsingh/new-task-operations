const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware');

// Add Member to Task
router.post('/:taskId/add', authMiddleware, memberController.addMember);

// Remove Member from Task
router.post('/:taskId/remove', authMiddleware, memberController.removeMember);

// Get Members of Task
router.get('/:taskId', authMiddleware, memberController.getMembers);

module.exports = router;
