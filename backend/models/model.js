const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let secret = "kjhsduhkdfvikuuhfdvhkufdvfvfviufsvjhfviuffv";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true, // Assuming emails should be unique
        required: true, // Assuming email is required
    },
    password: {
        type: String,
        required: true, // Assuming password is required
    }
});

userSchema.methods.generateToken = async function () {
    try {
        let token = await jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        }, secret, {
            expiresIn: "30d",
        });
        console.log(token)
        return token; // Return the generated token
    } catch (error) {
        console.error(error);
        throw new Error("Token generation failed");
    }
};

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    try {
        let saltRound = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashPassword;
        next();
    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the next middleware
    }
});

const User = mongoose.model("Usersdata", userSchema);
module.exports = User;
