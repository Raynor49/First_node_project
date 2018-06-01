const fs = require('fs')
const querystring = require('querystring')
const https = require('https')
const http = require('http')

const githubServer = http.createServer((req, res) => {
  if (req.method == 'POST'){
    res.end("I'm a POST request")
  }
  res.end("Danger, not a POST request")
})

githubServer.listen(8000, () => console.log('listening to 8k')
