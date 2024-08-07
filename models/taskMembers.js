module.exports = (sequelize, DataTypes) => {
    const TaskMembers = sequelize.define('TaskMembers', {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      taskId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    });
    return TaskMembers;
  };
  