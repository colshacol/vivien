import BodyParser from '../src/components/BodyParser'
import Cors from '../src/components/Cors'

export const Middleware = async (props, context, next) => {
  return (
    <Cors>
      <BodyParser>{next}</BodyParser>
    </Cors>
  )
}
