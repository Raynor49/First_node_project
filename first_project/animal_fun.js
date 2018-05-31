const fs = require('fs')
fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  const letter = process.argv[2]
  let animals = data.split('\n')
  let filtered_animals = []

  for (var i = 0; i < animals.length; i++) {
      if (animals[i].startsWith(letter) && animals[i] !== 'list'){
        filtered_animals.push(animals[i])
      }
  }

  fs.writeFile(`${letter}_animals.txt`, filtered_animals.join('\n'), (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('it worked!')
  })
})
