import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://khoi2pham:Bimlatuidayne02@datingapp.chvybdn.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello me"))


// New 
app.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard).then((data) => {
    console.log(JSON.stringify(data))
    res.status(200).send(data)
    })
})

app.get('/dating/cards', (req, res) => {
    Cards.find().then((data) => {
    res.status(200).send(data)
    })
})

/*
app.get('/dating/cards', (req, res) => {
    Cards.find({})
    .then(data => {
    res.status(201).send(data);
    })
    .catch(err => {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while reading the card' });
    });
});

app.post('/dating/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard)
    .then(data => {
    res.status(201).send(data);
    })
    .catch(err => {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while creating the card' });
    });
});
*/

    

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
