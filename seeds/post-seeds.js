const { Post } = require('../models');

const postData = [{
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor',
    user_id: 1
},
{
    title: 'Lorem ipsum',
    content: 'lorem ipsum dolor',
    user_id: 2
},
{
    title: 'Lorem',
    content: 'Lorem ipsum dolor',
    user_id: 3
}];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;