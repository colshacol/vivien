import { BodyParser } from './BodyParser'
import { Cors } from './Cors'

export const Middleware = (props, context, next) => {
  return (
    <Cors>
      <BodyParser>{next}</BodyParser>
    </Cors>
  )
}
