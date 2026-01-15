const User = require('../models/user');
const bcrypt =require('bcryptjs');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password,10)
        const user = new User({ name, email, password:hashPassword })
        await user.save();
        res.redirect('../success.html');
    }
    catch (err) {
        console.log(err);
        res.send("Something went wrong")
    }
}
