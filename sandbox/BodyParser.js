import jsonBody from 'body/json'
import util from 'util'

const parseJsonBody = util.promisify(jsonBody)

export const BodyParser = async (props, context, next) => {
  console.log('body parser')
  const { err, body } = await parseJsonBody(context.request, context.response)
  console.log('got body', { body, err })
  return next
}
