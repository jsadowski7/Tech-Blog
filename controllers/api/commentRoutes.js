const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.post('/', withAuth, (req, res) => {

});

router.put('/', withAuth, (req, res) => {

});

router.delete('/', withAuth, (req, res) => {

});

module.exports = router;