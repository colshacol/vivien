import http from 'http'
import Vivien from './Vivien'

const listen = (server) => (port) => {
  return server.listen(port, () =>
    console.log(`Listening @ http://localhost:${port}`)
  )
}

export default (Component, options) => {
  const server = http.createServer((request, response) => {
    const vivien = new Vivien(request, response, Component)
  })

  return listen(server)(options.port)
}
