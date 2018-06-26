import { Vivien } from 'vivien'

import { Middleware } from './Middleware'
import { Router } from './Router'
import { Route } from './Route'

import { V0Logout, V0Login, V1Login, V1Logout } from './routes'

const App = (props, context, next) => {
  return (
    <Middleware>
      <Router prefix="/api/v0">
        <Router prefix="/auth">
          <Route post path="/login" component={V0Login} />
          <Route get path="/logout" component={V0Logout} />
        </Router>
      </Router>
      <Router prefix="/api/v0">
        <Router prefix="/auth">
          <Route post path="/login" component={V1Login} />
          <Route get path="/logout" component={V1Logout} />
        </Router>
      </Router>
    </Middleware>
  )
}

Vivien.listen(App, 5099)
