const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('/Users/yaods/Documents/notes/devops_notes.md')
  stream.pipe(res)
})
server.listen(3000)