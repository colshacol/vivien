import Send from '../src/components/Send'

export default async (props, context, next) => {
  return (
    <Send
      code={200}
      type="json"
      data={{
        llamas: 'cool',
        monkeys: 'naughty'
      }}
    />
  )
}
