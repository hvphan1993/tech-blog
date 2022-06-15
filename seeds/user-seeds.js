const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'leonardo',
    password: 'password123'
  },
  {
    username: 'donatello',
    password: 'password123'
  },
  {
    username: 'raphael',
    password: 'password123'
  },
  {
    username: 'michelangelo',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;