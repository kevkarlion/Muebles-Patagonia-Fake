'use client'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export const Formulario = () => {
  return (
    <Form className='px-4 mb-11'>
      <Row className="mb-3 ">
        <Form.Group className='col-12 col-md-6'  controlId="formGridEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className='col-12 col-md-6' controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group  className="mb-3 col-12 col-md-6" controlId="formGridAddress1">
          <Form.Label>Celular</Form.Label>
          <Form.Control placeholder="Celular" type='phone'/>
        </Form.Group>

        <Form.Group  as={Col} className="mb-3 col-12 col-md-6" controlId="formGridAddress2">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control placeholder="Ciudad" required />
        </Form.Group>
      </Row>

     
    

      <Form.Label>Mensaje</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

   

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};
