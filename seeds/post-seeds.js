const { Post } = require('../models');

const postData = [{
    title: 'Lorem ipsum I',
    content: 'Lorem ipsum dolor',
    user_id: 1
},
{
    title: 'Lorem ipsum II',
    content: 'lorem ipsum dolor',
    user_id: 2
},
{
    title: 'Lorem III',
    content: 'Lorem ipsum dolor',
    user_id: 3
}];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;