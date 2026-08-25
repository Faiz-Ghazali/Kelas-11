import { Button } from 'radix-ui/toolbar'
function SimpleCounter() {
  return (
    <div>
      <p>Count: 0</p>
      <Button>+</Button>
      <Button>-</Button>
    </div>
  )
}

export default SimpleCounter
