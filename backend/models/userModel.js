const { Schema , model} = require("../connections");

const userSchema = new Schema({
    name :  String,
    email :  String,
    password :  String,
    role: {type: String, default: 'user'},
    avatar: {type: String, default: 'avatar_placeholder.png'},
    createdAt: {type: Date, default: Date.now}
});

module.exports = model('user', userSchema);
