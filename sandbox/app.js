import { Vivien } from '../src'
import BodyParser from './Body'
import Router from './Router'
import Cors from './Cors'
import Route from './Route'

import { VersionOneRoute, VersionZeroRoute } from './routes'

export const Middleware = (props, context, next) => {
  return (
    <Cors>
      <BodyParser>
        {next}
      </BodyParser>
    </Cors>
  )
}

const App = (props, context, next) => {
  return (
    <Middleware>
      <Router>
        <Route path="/api/v0" component={VersionZeroRoute} />
        <Route path="/api/v1" component={VersionOneRoute} />
      </Router>
    </Middleware>
  )
}

Vivien.listen(App, 5099)


