const http = require('http')
const router = require('.')

router.get('/api/users/:userId', (req, res) => {
  res.end('hello, world')
})

const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000)