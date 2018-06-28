import Vivien from '../src/Vivien'

import { Cors } from './Cors'
import { Router } from './Router'
import { Route } from './Route'

import { V0Logout, V0Login, V1Login, V1Logout } from './routes'

const App = async (props, context) => {
  return (
    <Cors>
      <Router name="v0" prefix="/api/v0">
        <Router name="v0-auth" prefix="/auth">
          <Route post path="/login" component={V0Login} />
          <Route get path="/logout" component={V0Logout} />
        </Router>
      </Router>
      <Router name="v1" prefix="/api/v1">
        <Router name="v1-auth" prefix="/auth">
          <Route get path="/login" component={V1Login} />
          <Route get path="/logout" component={V1Logout} />
        </Router>
      </Router>
    </Cors>
  )
}

Vivien.listen(App, 5099)
