import React from 'react'
import { Button } from './components/ui/button'
import { Input } from "@/components/ui/input"
import {Field} from "@/components/ui/field"
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
      <Input type="text" placeholder="Enter your text" />
      <Field label="Name" type="text" placeholder="Enter your name" />
      
    </div>
  )
}

export default App
