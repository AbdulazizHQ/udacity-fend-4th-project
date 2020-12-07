var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch")

const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config();
const apiKey = process.env.API_KEY

console.log(`My API key is: ${apiKey}`)

const apiURL = 'https://api.meaningcloud.com/sentiment-2.1?'

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analyze', (req, res) => {
    const url = req.query.url
    const params = new URLSearchParams({
        key: apiKey,
        lang: 'en',
        url: url
    });
    fetch(apiURL + params, {
        method: 'POST'
      })
      .then(response => response.json())
      .then(body => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Methods', 'POST')
            res.header('Access-Control-Allow-Headers', 'Content-Type')
            res.send({
                score_tag: body.score_tag,
                confidence: body.confidence,
                agreement: body.agreement,
                subjectivity: body.subjectivity,
                irony: body.irony})
        })
      .catch(err => console.log(err))
})
