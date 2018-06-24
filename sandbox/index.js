import { Vivien } from '../src'
import Middleware from './Middleware'
import BodyParser from './BodyParser'
import Router from './Router'
import Cors from './Cors'
import Route from './Route'

import { VersionOneRoute, VersionZeroRoute } from './routes'

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
