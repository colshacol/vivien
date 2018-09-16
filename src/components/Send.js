const TYPE_MAP = new Map([['json', 'application/json; charset=utf-8']])

export default async (props, context, next) => {
  const data = JSON.stringify(props.data || {})
  const type = TYPE_MAP.get(props.type) || props.type
  const code = props.code || 200

  context.response.setHeader('Content-Type', type)
  context.response.statusCode = code
  context.response.end(data)
}
