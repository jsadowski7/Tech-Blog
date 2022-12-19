const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {

});

router.get('/edit/:id', withAuth, (req, res) => {

});

router.get('/new', (req, res) => {

});

module.exports = router;