const { validateEmail } = require('../helpers/auth.helper');
const { getUserByEmail, addUser } = require('../services/global.service');

module.exports = {

    register: async (req, res) => {
        const { email, password } = req.body;

        const validationResult = validateEmail(email);

        if (!validationResult) {
            res.status(400).json({ message: 'Incorrect format of email' });
            return;
        }

        const existsUser = await getUserByEmail(email);

        if (existsUser) {
            res.redirect('/error/Email already in use/login/Login');
            return;
        }

        await addUser({
            email,
            password,
            id: Date.now() // Id can be same, but for this app it is good
        });

        return res.status(201).redirect('/login');
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        const validationResult = validateEmail(email);

        if (!validationResult) {
            res.redirect('/error/Incorrect format of email/login/Login');
            return;
        }

        const user = await getUserByEmail(email);

        if (!user || !(user.password === password)) {
            res.redirect('/error/Incorrect credentials/login/Login');
            return;
        }

        return res.redirect('/users');
    }

};
