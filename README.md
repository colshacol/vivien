# vivien

vivien is a 0 dependency prototype Node framework that lets you define the flow of your server using JSX.

```js
import { Vivien } from 'vivien-core'
import Middleware from './Middleware'
import Router from './Router'
import Route from './Route'

import { VersionOneRoute, VersionZeroRoute } from './routes'

const App = (props, context, next) => {
  return (
    <Route match="/api">
      <Route path="/v0" component={VersionZeroRoute} />
      <Route path="/v1" component={VersionOneRoute} />
    </Route>
  )
}

Vivien.listen(App, {
  port: 8080
})
```

And here is an example of what you might find in `./VersionZeroRoute`:

```js
export const VerzionZeroRoute = (props, context, next) => {
  return (
    <Send
      statis={200}
      type="json"
      data={{
        foo: true,
        bar: false
      }}
    />
  )
}
```

## Development

In the case that you'd like to see proof that I build such a misfit of a tool and that it works, you'll wanna do something like this:

```sh
# clone the project
git@github.com:colshacol/vivien.git && cd vivien

# install devDependencies (no production dependencies!)
yarn

# start that shit up
yarn develop
```
