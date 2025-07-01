const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    // User and Password will be defined automatically...
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)