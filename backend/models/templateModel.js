const { Schema , model} = require("../connections");

const mySchema = new Schema({
   template:String,
   category:String,
   framework:String,
   purpose:String,
   feature:String,

});

module.exports = model('template', mySchema);
