module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
    return Task;
  };
  