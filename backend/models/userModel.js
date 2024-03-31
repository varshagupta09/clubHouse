const { Schema , model} = require("../connection");

const userSchema = new Schema({
    name : {type : String, require:true},
    email : {type : String, require:true},
    password : {type : String, require:true},

});

module.exports = model('post', userSchema);
