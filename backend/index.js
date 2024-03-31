//Import express
const express = require('express');
// const postRouter = require('./routers/postRouter')
const cors = require('cors');


//initialize express app
const app =  express();
const port = 5500;

//middleware 

app.use(cors({
    origin: 'http://localhost:3001'
}));


app.use('/post' , userRouter)

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res)=> {
    res.send('add response from exress')
})

app.listen(port, () => {console.log('server startted'); });