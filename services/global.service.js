// global service because these services are using in all controllers
const fs = require('fs');
const util = require('util');
const path = require("path");

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const usersPath = path.join(__dirname, '../', 'db', 'users.json');

const getUsers = async () => {
    const users = await readFilePromise(usersPath);

    return JSON.parse(users);
};

const addUser = async (user) => {
    const users = await getUsers();
    users.push(user);

    await writeFilePromise(usersPath, JSON.stringify(users));
};

const getUserByEmail = async (email) => {
    const users = await getUsers();

    const userByEmail = await users.find((user) => user.email === email);
    return userByEmail;
};

module.exports = {
    getUsers,
    addUser,
    getUserByEmail
}
