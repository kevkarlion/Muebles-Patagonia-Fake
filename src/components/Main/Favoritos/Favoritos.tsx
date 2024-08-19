import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Favoritos.module.sass";
import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

import Image from "next/image";

const PLACEHOLDERIMAGE = 'data:image/webp;base64,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'


export const Favoritos = () => {
  return (
    <div className={`${styles["container-main"]} mb-16 md:px-12 `} id="design">
      <Container className="flex flex-col items-center w-full h-auto gap-20 ">
        <div className="flex flex-col gap-4 md:flex-row items-end">
          <h1
            className={`flex justify-center text-center md:justify-start md:text-start text-4xl sm:text-6xl mt-16 uppercase ${abrilFatface.className}`}
          >
            Diseños exclusivos
          </h1>
          <Button
            variant="dark"
            className="w-56 bg-yellow-400 hover:bg-yellow-500 border-3 text-black border-black md:w-60 place-self-center  whitespace-nowrap  text-base uppercase font-normal md:mt-16"
          >
            Nuestro Catalogo
          </Button>{" "}
        </div>
        {/* Living */}
        <Row className="flex justify-center ">
          <Col sm={12} lg={5}>
         
          <Image
            className="rounded-lg"
            src="/images-main/living.jpg"
            alt="image-cocina"
            width={700}
            height={400}
            sizes="(max-width:600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            layout="responsive"
            priority
            placeholder="blur"
            blurDataURL={PLACEHOLDERIMAGE}
          />
         
          </Col>
          <Col
            sm={12}
            lg={5}
            className={` ${styles["container-col"]}  flex flex-col justify-center `}
          >
            <h2
              className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}
            >
              Living
            </h2>
            <p className="text-center mb-4 font-normal	w-3/4	self-center">
              Transforma tu espacio con nuestra colección de muebles de diseño
              para living, donde cada pieza es una obra maestra de estilo y
              comodidad. Descubre sofás, mesas y accesorios creados para brindar
              un ambiente acogedor y sofisticado, ideal para relajarte y recibir
              a tus invitados con elegancia.
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal	"
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
              src="/images-main/comedor.jpg"
              width={300}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image-cocina"
              style={{ objectFit: "contain", position: "static" }}
              priority
            />
          </Col>
          <Col
            sm={12}
            lg={5}
            className="flex flex-col justify-center lg:order-1"
          >
            <h2
              className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}
            >
              Comedor
            </h2>
            <p className="text-center mb-4 font-normal	w-3/4	self-center">
              Crea un ambiente acogedor y sofisticado en tu hogar con nuestras
              soluciones de diseño para comedores. Cada pieza está diseñada para
              ofrecer tanto funcionalidad como estilo, proporcionando el
              escenario perfecto para cenas familiares y reuniones sociales. Con
              una combinación de materiales de alta calidad y un diseño
              contemporáneo, nuestros comedores están pensados para realzar la
              belleza de tu hogar mientras brindan comodidad y durabilidad.
              Descubre cómo nuestras opciones pueden transformar tu comedor en
              un espacio donde cada comida se convierte en una experiencia
              memorable.{" "}
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal"
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
              src="/images-main/cocina.jpg"
              width={1080}
              height={920}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image-cocina"
              style={{ objectFit: "cover", position: "static" }}
              priority
            />
          </Col>
          <Col sm={12} lg={5} className="flex flex-col justify-center">
            <h2
              className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}
            >
              Cocina
            </h2>
            <p className="text-center mb-4 font-normal	w-3/4	self-center">
              Transforma tu cocina en el corazón del hogar con nuestras
              soluciones de diseño innovadoras. Cada pieza está meticulosamente
              diseñada para combinar estilo y funcionalidad, ofreciendo un
              espacio que no solo refleja tu buen gusto, sino que también
              optimiza la experiencia culinaria. Nuestras cocinas están pensadas
              para crear ambientes que inspiran creatividad y disfrute en cada
              comida.
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal"
            >
              Colección
            </Button>{" "}
          </Col>
        </Row>

        {/* Relajación */}
        <Row className="flex flex-col justify-center items-center lg:flex-row">
          <Col sm={12} lg={5} className="flex justify-center lg:order-last">
            <Image
              className="rounded-lg"
              src="/images-main/ocio.jpg"
              width={300}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image-cocina"
              style={{ objectFit: "contain", position: "static" }}
              priority
            />
          </Col>
          <Col
            sm={12}
            lg={5}
            className="flex flex-col justify-center lg:order-first"
          >
            <h2
              className={`text-4xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}
            >
              Relax
            </h2>
            <p className="text-center mb-4 font-normal	w-3/4	self-center">
              Redefine el concepto de diversión en casa con nuestras áreas de
              entretenimiento diseñadas para combinar estilo y confort.
              Perfectas para reuniones sociales, noches de película o momentos
              de relajación, nuestras soluciones crean espacios que invitan a
              disfrutar y compartir. Encuentra la inspiración para transformar
              tu hogar en el lugar ideal para el ocio y el disfrute.
            </p>
            <Button
              variant="dark"
              className="w-32 place-self-center mb-3 sm:w-36 sm:h-12  text-base uppercase font-normal"
            >
              Colección
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
