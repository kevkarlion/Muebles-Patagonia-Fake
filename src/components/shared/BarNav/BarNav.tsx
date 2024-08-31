"use client";


import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";



import styles from "./BarNav.module.sass";

import { usePathname, useRouter} from "next/navigation";




// Función de manejo de clic en navegación

// Componente de Barra de Navegación
export const BarNav = () => {
  const path = usePathname()
  const router = useRouter()
  const HandleNavClick = (scroll: string) => {
    if (path === "/") {
      const element = document.querySelector(scroll)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.replace("/");
      setTimeout(() => {
        router.push(scroll)
      }, 500);
    }
  }

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          bg="dark"
          data-bs-theme="light"
          fixed="top"
          key={expand}
          expand={expand}
          className={`${styles["custom-navbar"]}  bg-body-tertiary h-20 drop-shadow-xl`}
        >
          <Container fluid>
            <Navbar.Brand
              className={`ml-3 uppercase font-abril`}
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
                <Nav className="justify-content-end flex-grow-1 pe-3 font-roboto">
                  <Nav.Link href="#" onClick={() => HandleNavClick("#home")}>
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    href="#design"
                    onClick={() => HandleNavClick("#design")}
                  >
                    DISEÑOS
                  </Nav.Link>
                  <Nav.Link
                    href="#about-us"
                    onClick={() => HandleNavClick("#about-us")}
                  >
                    NOSOTROS
                  </Nav.Link>
                  <Nav.Link
                    href="#form"
                    onClick={() => HandleNavClick("#form")}
                  >
                    CONTACTO
                  </Nav.Link>
                  <Nav.Link
                    href="#redes"
                    onClick={() => HandleNavClick("#redes")}
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
