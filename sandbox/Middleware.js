import { BodyParser } from './BodyParser'
import { Cors } from './Cors'

export const Middleware = async (props, context, next) => {
  return (
    <Cors>
      <BodyParser>{next}</BodyParser>
    </Cors>
  )
}
