"use client"; // Asegúrate de tener esta línea si estás usando Next.js con React Server Components.

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";

import { Abril_Fatface } from "next/font/google";
import styles from "./BarNav.module.sass";

import { usePathname, useRouter } from "next/navigation";

// Importa la tipografía
const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

// Función de manejo de clic en navegación

// Componente de Barra de Navegación
export const BarNav = () => {
  

  // const HandleNavClick = (id: string) => {
    
  //   console.log('id es', id),
  //   <Link href='/#redes' scroll={false}></Link>
  // };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          bg="dark"
          data-bs-theme="light"
          fixed="top"
          key={expand}
          expand={expand}
          className={`${styles["custom-navbar"]} bg-body-tertiary h-20 drop-shadow-xl`}
        >
          <Container fluid>
            <Navbar.Brand
              className={`ml-3 uppercase ${abrilFatface.className}`}
              href="#"
            >
              Muebles Patagonia
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="!w-[250px]"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    // onClick={() => HandleNavClick("home")}
                    id="home"
                    href="#"
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    // onClick={() => HandleNavClick("design")}
                    id="design"
                    href="#design"
                  >
                    DISEÑOS
                  </Nav.Link>
                  <Nav.Link
                    // onClick={() => HandleNavClick("about-us")}
                    id="about-us"
                    href="#about-us"
                  >
                    NOSOTROS
                  </Nav.Link>
                  <Nav.Link
                    // onClick={() => HandleNavClick("form")}
                    id="form"
                    href="#form"
                    
                  >
                    CONTACTO
                  </Nav.Link>
                  <Nav.Link
                    // onClick={() => HandleNavClick("redes")}
                    id="redes"
                    href="#redes"
                  >
                    REDES
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
export default BarNav;
