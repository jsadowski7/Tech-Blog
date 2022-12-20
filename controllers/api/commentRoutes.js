const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {

});

router.put('/', withAuth, (req, res) => {

});

router.delete('/', withAuth, (req, res) => {

});

module.exports = router;