# vivien

vivien is a 0 dependency prototype Node framework that lets you define the flow of your server using JSX.

```js
import { Vivien } from '@vivien/core'
import Middleware from './Middleware'
import Router from './Router'
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
```

```js
import BodyParser from './Body'
import Cors from './Cors'

export const Middleware = (props, context, next) => {
  return (
    <Cors>
      <BodyParser>{next}</BodyParser>
    </Cors>
  )
}
```
