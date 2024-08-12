'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Abril_Fatface } from 'next/font/google'


const abrilFatface = Abril_Fatface ({
  weight: ['400'],
  subsets: ['latin']
})



import styles from './BarNav.module.sass'


export const BarNav = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar bg="dark" data-bs-theme="ligth"  fixed="top" key={expand} expand={expand} className= {`${styles['custom-navbar']} bg-body-tertiary h-20  drop-shadow-xl` }>
          <Container fluid>
            <Navbar.Brand className={`ml-3 uppercase ${abrilFatface.className}`} href="#">Muebles Patagonia</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='!w-[250px]'
            >
              <Offcanvas.Header closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  
                
                  <Nav.Link href="#action2">DISEÑOS</Nav.Link>
                  <Nav.Link href="#action2">NOSOTROS</Nav.Link>
                  <Nav.Link href="#action2">CONTACTO</Nav.Link>
                  <Nav.Link href="#action2">REDES</Nav.Link>
                </Nav>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
