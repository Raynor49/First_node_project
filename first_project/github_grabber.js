const fs = require('fs')
const querystring = require('querystring')
const https = require('https')
const http = require('http')

const githubServer = http.createServer((req, res) => {
  if (req.method == 'POST'){
    let info = ''
    req.on('data', d => {
      info += d
    })
    req.on('end', () => {
      const username = qs.parse(info).username
      res.end(username)
    })

  }
})

githubServer.listen(8000, () => console.log('listening to 8k'))
