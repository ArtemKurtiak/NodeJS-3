const router = require('express').Router();

const { login, register } = require('../controllers/auth.controller');

router.get('/register', (req, res) => res.render('register'));

router.post('/register', register);

router.get('/login', (req, res) => res.render('login'));

router.post('/login', login);

module.exports = router;
