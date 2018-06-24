import BodyParser from './BodyParser'
import Cors from './Cors'

export const Middleware = (props, context, next) => {
  console.log('Middleware-----')
  return (
    <Cors>
      <BodyParser>{next}</BodyParser>
    </Cors>
  )
}

export default Middleware
