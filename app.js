const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const {usersRouter, authRouter, errorRouter} = require("./routers");
const {PORT} = require("./constants/config");


const app = express();

const templatesPath = path.join(__dirname, 'static');


app.use(express.static(templatesPath));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({defaultLayout: false}));
app.set('views', templatesPath);


app.use('/', authRouter);

app.use('/users', usersRouter);

app.use('/error', errorRouter)


app.listen(PORT, () => {
    console.log(`Server run at port ${PORT}`);
});
