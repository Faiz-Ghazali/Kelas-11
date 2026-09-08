import React from 'react'
import { Button } from './components/ui/button'
import { Input } from "@/components/ui/input"
function App() {
  return (
    <div>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <hr />
      <Button variant="link" size="md">
        Link
      </Button>
      
    </div>
  )
}

export default App
