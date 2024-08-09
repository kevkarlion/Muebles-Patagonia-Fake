'use client'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Abril_Fatface } from 'next/font/google'
import styles from './Form.module.sass'

const abrilFatface = Abril_Fatface ({
  weight: ['400'],
  subsets: ['latin']
})



export const Formulario = () => {
  return (
    <Form className={` ${styles['container-form']} px-4  w-full pb-11`} id='form'>

      <div className={`flex flex-col justify-center items-center text-center gap-3 mb-6 pt-11`}>
        <h1 className={`  ${abrilFatface.className} text-4xl sm:text-6xl`}>Escribenos</h1>
        <h2 className='text-xl font-light'>Estamos para ayudarte a encontrar tu diseño perfecto</h2>
      </div>

      <div className='flex flex-col  items-center justify-center md:items-start md:!w-2/5'>
        <div className=''>
          <Row className="mb-3 ">
            <Form.Group className=''  controlId="formGridEmail">
              <Form.Label className={`${styles['label']}`}>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" required/>
            </Form.Group>

            <Form.Group className='' controlId="formGridPassword">
              <Form.Label className={`${styles['label']}`}>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required/>
            </Form.Group>
          

        
            <Form.Group  className="" controlId="formGridAddress1">
              <Form.Label className={`${styles['label']}`}>Celular</Form.Label>
              <Form.Control placeholder="Celular" type='phone' required/>
            </Form.Group>

            <Form.Group  as={Col} className="mb-3 " controlId="formGridAddress2">
              <Form.Label className={`${styles['label']}`}>Ciudad</Form.Label>
              <Form.Control placeholder="Ciudad" required />
            </Form.Group>
          </Row>
          <Form.Label className={`${styles['label']} `}>Mensaje</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100%' }}
              required
            />
          </FloatingLabel>
          
        </div>
      </div>
      <div className='flex justify-start'>
          <Button variant="primary" type="submit" className='mt-4'>
            Enviar
          </Button>
      </div>
  </Form>
  );
};
