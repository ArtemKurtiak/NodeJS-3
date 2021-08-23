const router = require('express').Router();

const {getAllUsers, getUserById} = require("../controllers/users.controller");

router.get('/', getAllUsers);

router.get('/:userId', getUserById);

module.exports = router;
