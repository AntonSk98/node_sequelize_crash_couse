const e = require('express');
const express = require('express')
const path = require('path');
const sequelize = require('./database/connection');

const app = express();

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PORT = 8000;

app.use('', (req, res, next) => {
    res.status(404).json(
        {
            status: 'Page not found',
            message: 'Unfortunately such page does not exist'
        }
    )
})

const a = async () => {
    const value = await sequelize.sync({force: true})
    console.log(value)
    const user = await require('./models/User').create({name: 'User', age: 22, cash: 300})
    user.name = 'Anton'
    await user.save();
    await user.increment({
        'age': 10
    });
    // await user.destroy()
}

a()

app.listen(PORT, () => {
    console.log(`App is started on port ${PORT}`)
})