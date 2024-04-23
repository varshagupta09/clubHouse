//Import express
const express = require('express');
const userRouter = require('./router/userRouter')
const templateRouter = require('./router/templateRouter')
const utilRouter = require('./router/utilRouter')

const cors = require('cors');


//initialize express app
const app =  express();
const port = 5500;

//middleware 

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());


app.use('/user' , userRouter)
app.use('/template' , templateRouter)
app.use('/util' , utilRouter)

app.use(express.static('./static/uploads'));


app.get('/', (req, res) => {
    res.send('response from express');
});

app.listen(port, () => {console.log('server startted'); });