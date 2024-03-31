const mongoose = require('mongoose');

const url = "mongodb+srv://vrsa8896:varsha123@cluster0.rbeikpu.mongodb.net/ReactUIHubDatabase?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log("database connected successfully");
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;


//database is a organise data
// manage the data we using dbms which is SQL , mondoDB
//structured data - 
// promise object
