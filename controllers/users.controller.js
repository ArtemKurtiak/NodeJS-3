const { getUsers } = require('../services/user.service');

module.exports = {

    getAllUsers: async (req, res) => {
        const users = await getUsers();

        return res.render('users', { users });
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;

        const users = await getUsers();

        const existsUser = users.find((user) => user.id === Number(userId));

        if (!existsUser) {
            res.redirect('/error/User not found/users/Users');
            return;
        }

        return res.render('user', { ...existsUser });
    }

};
