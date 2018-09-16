import jsonBody from 'body/json'
import util from 'util'

const parseJsonBody = util.promisify(jsonBody)

export default async (props, context, next) => {
  const { err, body } = await parseJsonBody(context.request, context.response)
  return next
}
