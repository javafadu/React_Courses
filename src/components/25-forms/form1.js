import React, { useState } from 'react'
import { Container, Form, Input } from 'reactstrap'

const Form1 = () => {
    const [name, setName] = useState("");

  return (
    <Container className="mt-5">
        <Form>
            <Input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
        </Form>
    </Container>
  )
}

export default Form1