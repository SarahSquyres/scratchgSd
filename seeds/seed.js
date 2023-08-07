const sequelize = require('../config/connection');
const { User, Task, Comment } = require('../models');
// const { User, List, Task, Comment } = require('../models');

const userData = require('./userData.json');
const taskData = require('./taskData.json');
// const taskData = require('./taskData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true, dropCascade: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const list of taskData) {
    await Task.create({
      ...list,
    });
  };

  // for (const comment of commentData) {
  //   const newComment = await Comment.create({
  //     ...comment,

  //   });
  // }

  process.exit(0);
};

seedDatabase();