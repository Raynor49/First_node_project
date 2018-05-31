const fs = require('fs')
fs.writeFile('./example.txt', 'I am what will be written.', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('it worked!')
})
