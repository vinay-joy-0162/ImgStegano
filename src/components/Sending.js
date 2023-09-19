import React from "react";
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import sending from './Styles/sending.css';
import Button from 'react-bootstrap/Button';

function Transfer () {
    return (

        <Container>
        <div>
            <h1 className="send">Send Image</h1>

            <Form className="form_sending">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="labeling">Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="labeling">Type a note</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <h3 className="labeling">Choose the Embeded Image</h3>
      <input type="file" accept='image/*' />
      <br />
      <br />
      <br />

      <Button className='btn' variant="primary">Send </Button>{' '}
    </Form>



        </div>
        </Container>
    )
}

export default Transfer;




