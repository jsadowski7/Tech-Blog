const { Post } = require("../models");

const postData = [
  {
    title: "MVC",
    content:
      "MVC allows developers to maintain separation of concerns and devise code",
    user_id: 1,
  },
  {
    title: "ORMs",
    content: "ORMs simplify creating queries in SQL!",
    user_id: 2,
  },
  {
    title: "Project",
    content: "Going to use Axios for the first time!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
