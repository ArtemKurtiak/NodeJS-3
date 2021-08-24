const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const errorRouter = require('./error.router');

module.exports = {
    usersRouter,
    authRouter,
    errorRouter
};
