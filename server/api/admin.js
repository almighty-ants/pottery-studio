const router = require('express').Router();
const { User } = require('../db/index');

// GET /api/admin/users
router.get('/users', async (req, res, next) => {
  try {
    // if (User.isAdmin === true) {
      const users = await User.findAll();
      res.json(users);
    // }
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;