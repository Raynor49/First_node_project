
const fs = require('fs')
const http = require('http')
const cache = {}


function selectAnimals(animalString, animalLetter) {
  return animalString
    .split('\n')
    .filter(animal => animal.startsWith(animalLetter))
    .join('\n')
}



const server = http.createServer((req, res) => {
  const query = req.url.split('?')[1]
  if (query !== undefined) {
    const animalLetter = query[0].toUpperCase()

    if (cache[animalLetter] !== undefined) {
      res.end(cache[animalLetter])
    }

    if (animalLetter !== undefined) {
      fs.readFile('./animals.txt', 'utf-8', (err, data) => {
        if (err) {
          console.log(err)
          res.end('IT WENT POORLY')
          return
        }
        const animals = selectAnimals(data, animalLetter)
        cache[animalLetter] = animals
        res.end(animals)
      })
    }
  } else {
    if (cache['animals'] !== undefined) {
      res.end(cache['animals'])
    }
    fs.readFile('./animals.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
        res.end('IT WENT POORLY')
        return
      }
      cache['animals'] = data
      res.end(data)
    })
  }
})

server.listen(8000, () => console.log("I'm listening on port 8000"))
