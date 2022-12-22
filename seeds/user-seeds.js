const { User } = require('../models');

const userData = [{
    username: 'JaneDoe',
    password: 'janeDoe1'
},
{
    username: 'JohnDoe',
    password: 'johnDoe1'
},
{
    username: 'JamesDoe',
    password: 'jamesDoe1'
}];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers