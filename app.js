const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const memberRoutes = require('./routes/members');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/members', memberRoutes);

// Sync Database
db.sequelize.sync().then(() => {
  console.log('Database connected and synced');
}).catch(err => {
  console.log('Error syncing database:', err);
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
