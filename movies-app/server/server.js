const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const db = require ('./index');
const movieRouter = require('./routes/movie-router')
const Movie = require('./models/movie-model')


const app = express();
const apiPort = 5000




app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors( {
    origin: "http://localhost:3000",
    credentials: true
  }))
 
app.use(bodyParser.json())
app.use(movieRouter)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.get('/', (req,res)=> {
    
res.send ('hello world');
  
})
app.post('/ahmed',(req, res) => {
    const {body,name,time,rating} = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

   

})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

