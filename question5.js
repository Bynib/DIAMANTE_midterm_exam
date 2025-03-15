// importing all necessary modules
const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');

// creating db object
const db = {};

// route to handle GET users request
app.get('/users', (req, res) => {
    db.User.findAll()
        .then(users => res.json(users)) //return JSON response
        .catch(err => res.status(500).json({ message: err.message })); //HANDLE ERROR
});

//starting server and listening to port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//creating user model using sequelize
function model(sequelize) {
    const attributes = {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        name: { type: DataTypes.STRING, allowNull: false},
        email: { type: DataTypes.STRING, allowNull: false},
        status: {type: DataTypes.STRING, allowNull: false},
    };
    return sequelize.define('User', attributes);
}

//initializing db and defining credentials
async function initialize() {
    const host = 'localhost';
    const port = 3306;
    const user = 'root';
    const password = '';
    const database = 'user';

    //creating the database if not exist
    const connection = await mysql.createConnection ({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //creating new instance
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    //defining User model
    db.User = model(sequelize);

    //syncing model with the db
    await sequelize.sync({ alter: true });
}

//running the function
initialize();