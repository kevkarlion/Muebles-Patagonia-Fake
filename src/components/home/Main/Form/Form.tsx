"use client";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "next/image";
import Link from "next/link";
import styles from "./Form.module.sass";


export const Formulario = () => {
  return (
    <Form
      className={` ${styles["container-form"]}  px-4  w-full pb-11 font-roboto`}
      
    >
      <div
        className={`flex flex-col justify-center items-center text-center gap-3 mb-6 pt-11 `}
      >
        <h1 className={`font-abril font-bold text-4xl sm:text-6xl scroll-mt-[120px]`} id="form">
          Escríbenos
        </h1>
        <h2 className="text-xl font-light ">
          Estamos para ayudarte a encontrar tu diseño perfecto
        </h2>
        {/* View mobile */}
        <Link className="md:hidden" href="/catalogo/ofertas">
          <div className="hover:bg-yellow-500 w-[350px] h-[80px] border-1 border-black flex justify-center items-center bg-yellow-400">
            <p className="text-black	text-center uppercase font-normal text-xl ml-5">
              ! mira nuestras <br /> ofertas especiales !
            </p>
            <Image
              width={30}
              height={30}
              alt="icon-click"
              src={"/icons/click-hand.svg"}
            />
          </div>
        </Link>
      </div>

      <div className="md:flex justify-around">
        <div className="flex flex-col  items-center justify-center md:items-start md:!w-2/5 ">
          <div className="">
            <Row className="mb-3 ">
              <Form.Group className="" controlId="formGridEmail">
                <Form.Label className={`${styles["label"]}`}>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" required />
              </Form.Group>

              <Form.Group className="" controlId="formGridPassword">
                <Form.Label className={`${styles["label"]}`}>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>

              <Form.Group className="" controlId="formGridAddress1">
                <Form.Label className={`${styles["label"]}`}>
                  Celular
                </Form.Label>
                <Form.Control placeholder="Celular" type="phone" required />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3 "
                controlId="formGridAddress2"
              >
                <Form.Label className={`${styles["label"]}`}>Ciudad</Form.Label>
                <Form.Control placeholder="Ciudad" required />
              </Form.Group>
            </Row>
            <Form.Label className={`${styles["label"]} `}>Mensaje</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100%" }}
                required
              />
            </FloatingLabel>
          </div>
          <div className="flex justify-start">
            <Button variant="primary" type="submit" className="mt-4">
              Enviar
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative ">
          <Image
            className="rounded-md "
            width={300}
            height={700}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="imagen-mueble-de-diseño"
            src={"/img-form/img-form-700.webp"}
            loading='lazy'
          />
          <Link href="/catalogo/ofertas">
            <div className="hover:bg-yellow-500 w-[400px] h-[150px] absolute bottom-[75px]  left-1/2 transform -translate-x-1/2 border-3 border-black flex justify-center items-center bg-yellow-400">
              <p className="text-black	text-center uppercase font-bold text-2xl ml-5">
                ! mira nuestras <br /> ofertas especiales !
              </p>
              <Image
                width={50}
                height={50}
                alt="icon-click"
                src={"/icons/click-hand.svg"}
              />
            </div>
          </Link>
        </div>
      </div>
    </Form>
  );
};
