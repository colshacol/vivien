export const Route = async (props, context, next) => {
  console.log('Route', { props })
  return (
    <If condition={methodMatches(props, context)}>
      <If condition={context.vivien.matchPath(props.path)}>
        {props.component(props, context, next)}
      </If>
    </If>
  )
}

const methodMatches = (props, context) => {
  const method = methodFromProps(props)
  const matches = method === context.request.method

  return matches
}

const methodFromProps = (props) => {
  return (
    (props.get && 'GET') ||
    (props.put && 'PUT') ||
    (props.post && 'POST') ||
    (props.delete && 'DELETE') ||
    'GET'
  )
}
