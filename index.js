const express = require('express');
const date = require('date-format')

const app = express();

const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.status(503).send("<h1>HELLo WOrld</h1>")
})

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        userName: "chandhu_galidevara",
        followers: 69,
        follows: 420,
        date: date.asString("dd/MM/yy - hh:mm:ss",new Date()),
    }

    res.status(200).json(instaSocial)
})

app.get('/api/v1/facebook', (req, res) => {
    const facebookSocial = {
        userName: "SaiChand",
        followers: 690,
        follows: 4200,
        date: date.asString("dd/MM/yy - hh:mm:ss",new Date()),
    }

    res.status(200).json(facebookSocial)
})

app.get('/api/v1/linkedin', (req, res) => {
    const linkedInSocial = {
        userName: "SaiChand",
        followers: 6900,
        follows: 42000,
        date: date.asString("dd/MM/yy - hh:mm:ss",new Date()),
    }
    // console.dir(req.path);
    const result = req.path.split('/')
    const ress = result[result.length - 1];
    console.dir(ress);
    res.status(200).json(linkedInSocial)
})

app.get('/api/v1/hermes', (req, res) => {
    // console.dir(req.path);
    const result = req.path.split('/')
    const ress = result[result.length - 1];
    console.dir(ress);
    res.status(200).json(ress);
})

app.get('/api/v1/:random', (req, res) => {
    console.dir(req.params.random);
    res.status(200).json(req.params.random);
})

app.listen(PORT, () => {
    console.log(`The server is running at ${ PORT }`);
})
