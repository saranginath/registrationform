const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const connectDB = require('../config/db');
const userRoutes = require('./routes/userRoutes')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

connectDB();

app.use('/',userRoutes);



app.listen(3000, () => {
    console.log(`Server listening on port 3000`)
})