const db = require('../models');

exports.addMember = async (req, res) => {
  const { taskId } = req.params;
  const { userId } = req.body;

  try {
    const task = await db.Task.findByPk(taskId);
    const user = await db.User.findByPk(userId);
    if (!task || !user) {
      return res.status(404).json({ message: 'Task or User not found' });
    }

    await task.addUser(user);
    res.json({ message: 'Member added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding member', error });
  }
};

exports.removeMember = async (req, res) => {
  const { taskId } = req.params;
  const { userId } = req.body;

  try {
    const task = await db.Task.findByPk(taskId);
    const user = await db.User.findByPk(userId);
    if (!task || !user) {
      return res.status(404).json({ message: 'Task or User not found' });
    }

    await task.removeUser(user);
    res.json({ message: 'Member removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing member', error });
  }
};

exports.getMembers = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await db.Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const members = await task.getUsers();
    res.json(members);
  } 
  catch (error) {
    res.status(500).json({ message: 'Error removing member', error });
  }
}
