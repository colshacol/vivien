import Vivien from '../src/Vivien'
import Cors from '../src/components/Cors'
import Route from '../src/components/Route'

import SendFooBar from './SendFooBar'
import SendFooBaz from './SendFooBaz'

const App = async (props, context) => {
  return (
    <Route match="/foo">
      <Route match="/bar">
        <Route method="get">
          <SendFooBar />
        </Route>
      </Route>
      <Route match="/baz">
        <Route method="get">
          <SendFooBaz />
        </Route>
      </Route>
    </Route>
  )
}

Vivien.start(App, {
  port: 5099,
  debug: true
})
