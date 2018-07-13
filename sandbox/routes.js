import { BodyParser } from './BodyParser'

export const V0Login = async (props, context, next) => {
  console.log('V0Login')
  return (
    <BodyParser>
      {() => context.end('<html><body><h1>V1 Login</h1></body></html>')}
    </BodyParser>
  )
}

export const V0Logout = async (props, context, next) => {
  context.end('<html><body><h1>V0 Logout</h1></body></html>')
}

export const V1Login = async (props, context, next) => {
  console.log('V0 Login', context)
  context.end('<html><body><h1>V1 Login</h1></body></html>')
}

export const V1Logout = (props, context, next) => {
  context.end('<html><body><h1>V1 Logout</h1></body></html>')
}
