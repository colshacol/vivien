import http from 'http'
import Vivien from './Vivien'

const listen = (server) => (port) => {
  return server.listen(port, () =>
    console.log(`Listening @ http://localhost:${port}`)
  )
}

export default (component, port, options) => {
  const server = http.createServer((request, response) => {
    new Vivien(component, {
      request,
      response
    })
  })

  port |> (server |> listen)
}
