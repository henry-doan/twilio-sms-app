import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from axios;

const Msg = () => {
  const [sms_message, setMsg] = useState({ mobile_number: '', message: '' })

  const textMsg = () => {
    axios.post('/api/', { sms_message })
      .then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // validation for checking for if there is a 1 or if it is enough numbers
    setMsg({ ...sms_message, mobile_number: '1' + sms_message.mobile_number })
    textMsg()
    setMsg({ mobile_number: '', message: '' })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            name='mobile_number'
            value={sms_message.mobile_number}
            onChange={(e) => setMsg({ ...sms_message, mobile_number: e.target.value })}
            type="phone" 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            name='mobile_number'
            value={sms_message.message}
            onChange={(e) => setMsg({ ...sms_message, message: e.target.value })}
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Msg;