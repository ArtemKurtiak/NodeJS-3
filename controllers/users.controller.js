const {getUsers} = require("../services/global.service");

module.exports = {

    getAllUsers: async (req, res) => {
        const users = await getUsers();

        return res.render('users', { users });
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;

        const users = await getUsers();

        const user = users.find((user) => user.id === Number(userId));

        if (!user) {
            res.redirect('/error/User not found/users/Users');
            return;
        }

        return res.render('user', { ...user })
    }

}
