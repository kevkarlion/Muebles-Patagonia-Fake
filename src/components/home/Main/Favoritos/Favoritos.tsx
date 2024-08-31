import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Favoritos.module.sass";
import Link from "next/link";

import Image from "next/image";

export const Favoritos = () => {
  return (
    <div className={`${styles["container-main"]} scroll-mt-[70px] mb-16 container `} id="design">
      <Container className="flex flex-col  items-center w-full h-auto gap-20  ">
        <div className="flex flex-col justify-center w-full gap-4 md:!gap-12 md:px-4 md:flex-row items-center md:!justify-center xl:whitespace-nowrap md:items-center md:mb-14 md:mt-14 xl:!justify-center  2xl:!justify-center">
          <h1
            className={` font-abril flex justify-center text-5xl text-center w-60 sm:!w-auto md:!w-full  lg:!w-[800px] md:justify-start md:text-start  sm:text-7xl md:!text-7xl xl:!text-7xl  mt-16 md:m-0 uppercase md:self-center 2xl:mr-48 `}
          >
            Diseños exclusivos
          </h1>
          <div className=" flex flex-col items-center md:mt-5 ">
            <p className="text-xl md:text-2xl font-light text-center font-roboto">
              Conocé todo lo que <br />{" "}
              <span className="font-bold">tenemos para vos!</span>{" "}
            </p>
            <Image
              src="/icons/arrow-down.svg"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="flecha"
              style={{ objectFit: "cover", position: "static" }}
            />
            <Button
              variant="dark"
              href="/catalogo"
              className="flex items-center justify-center font-roboto  w-56 bg-yellow-400 hover:bg-yellow-500 border-1  text-black border-black h-11 md:h-14 md:w-60  whitespace-nowrap  text-base uppercase font-normal md:mt-4"
            >
              Nuestro Catalogo
            </Button>{" "}
          </div>
        </div>
        {/* Living */}
        <Row className="flex justify-center ">
          <Col sm={12} lg={6}>
            <Image
              className="rounded-lg"
              src="/images-main/living-1200.webp"
              width={700}
              height={400}
              
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="image-cocina"
              style={{ objectFit: "cover" }}
              
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            lg={5}
            className={` ${styles["container-col"]}  flex flex-col justify-center `}
          >
            <h2
              className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start font-abril`}
            >
              Living
            </h2>
            <p className="text-start mb-4 font-light	w-5/6	self-center font-roboto">
              Transforma tu espacio con nuestra colección de muebles de diseño
              para living, donde cada pieza es una obra maestra de estilo y
              comodidad. Descubre sofás, mesas y accesorios creados para brindar
              un ambiente acogedor y sofisticado, ideal para relajarte y recibir
              a tus invitados con elegancia.
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal	font-roboto"
            >
              Colección
            </Button>{" "}
          </Col>
        </Row>
        {/* Comedor */}
        <Row className="flex justify-center ">
          <Col sm={12} lg={5} className="flex justify-center lg:order-2">
            <Image
              className="rounded-lg"
              src="/images-main/comedor-1200.webp"
              width={300}
              height={700}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="image-cocina"
              style={{ objectFit: "contain", position: "static" }}
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            lg={5}
            className="flex flex-col justify-center lg:order-1"
          >
            <h2
              className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start font-abril`}
            >
              Comedor
            </h2>
            <p className="text-start mb-4 font-light	w-5/6	self-center font-roboto">
              Crea un ambiente acogedor y sofisticado en tu hogar con nuestras
              soluciones de diseño para comedores. Cada pieza está diseñada para
              ofrecer tanto funcionalidad como estilo, proporcionando el
              escenario perfecto para cenas familiares y reuniones sociales.{" "}
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal font-roboto"
            >
              Colección
            </Button>{" "}
          </Col>
        </Row>

        {/* Cocina */}
        <Row className="flex justify-center ">
          <Col sm={12} lg={5}>
            <Image
              className="rounded-lg"
              src="/images-main/cocina-1200.webp"
              width={700}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="image-cocina"
              style={{ objectFit: "cover", position: "static" }}
              loading="lazy"
            />
          </Col>
          <Col sm={12} lg={5} className="flex flex-col justify-center">
            <h2
              className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start font-abril`}
            >
              Cocina
            </h2>
            <p className="text-start mb-4 font-light	w-5/6	self-center font-roboto">
              Transforma tu cocina en el corazón del hogar con nuestras
              soluciones de diseño innovadoras. Cada pieza está meticulosamente
              diseñada para combinar estilo y funcionalidad, ofreciendo un
              espacio que no solo refleja tu buen gusto, sino que también
              optimiza la experiencia culinaria.
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal font-roboto"
            >
              Colección
            </Button>{" "}
          </Col>
        </Row>

        {/* Relax */}
        <Row className="flex flex-col justify-center items-center lg:flex-row">
          <Col sm={12} lg={5} className="flex justify-center lg:order-last">
            <Image
              className="rounded-lg"
              src="/images-main/relax-1200.webp"
              width={300}
              height={700}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="image-relax"
              style={{ objectFit: "contain", position: "static" }}
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            lg={5}
            className="flex flex-col justify-center lg:order-first"
          >
            <h2
              className={`text-4xl uppercase mb-4 mt-3 text-center lg:text-start font-abril`}
            >
              Relax
            </h2>
            <p className="text-start mb-4 font-light	w-5/6	self-center font-roboto">
              Redefine el concepto de diversión en casa con nuestras áreas de
              entretenimiento diseñadas para combinar estilo y confort.
              Perfectas para reuniones sociales, noches de película o momentos
              de relajación, nuestras soluciones crean espacios que invitan a
              disfrutar y compartir.
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal font-roboto"
            >
              Colección
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
