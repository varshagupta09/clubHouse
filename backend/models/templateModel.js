const { Schema , model} = require("../connections");

const mySchema = new Schema({
   title: String,
   image: String,
   template:String,
   category:String,
   framework:String,
   purpose:String,
   feature:String,
   createdAt: {
       type: Date,
       default: Date.now
   }
});

module.exports = model('template', mySchema);
