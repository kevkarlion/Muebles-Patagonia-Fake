import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from './Favoritos.module.sass'
import { Abril_Fatface } from 'next/font/google'


const abrilFatface = Abril_Fatface ({
  weight: ['400'],
  subsets: ['latin']
})

import Image from "next/image";

export const Favoritos = () => {
  return (
    <div className= {`${styles['container-main'] } mb-16 md:px-12 `} id="design">
      <Container className="flex flex-col items-center w-full h-auto gap-20 ">
        <div className="flex flex-col gap-4 md:flex-row items-end">
          <h1 className={`flex justify-center text-center md:justify-start md:text-start text-4xl sm:text-6xl mt-16 uppercase ${abrilFatface.className}`}>
            Diseños exclusivos
          </h1>
          <Button
                  variant="dark"
                  className="w-56 bg-yellow-400 hover:bg-yellow-500 border-3 text-black border-black h-14 md:w-60 place-self-center  whitespace-nowrap  text-base uppercase font-normal md:mt-16"
                  >
                  Nuestro Catalogo
                  </Button>{" "}
        </div>
        {/* Living */}
        <Row className="flex justify-center ">
          <Col sm={12} lg={6}>

                  <Image
                  className="rounded-lg"
                  src="/images-main/living.jpg"
                  width={1080}
                  height={920}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="image-cocina"
                  style={{ objectFit: "cover", position: "static" }}
                  priority
                  />
          </Col>
          <Col sm={12} lg={6} className={` ${styles['container-col']}  flex flex-col justify-center `}>
                  <h2 className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}>Living</h2>
                  <p className="text-left mb-4 font-normal	">
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
            <Col sm={12} lg={6} className="flex justify-center lg:order-2">
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
            lg={6}
            className="flex flex-col justify-center lg:order-1"
          >
                  <h2 className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}>Comedor</h2>
                  <p className="text-left mb-4 font-normal">
                  Crea un ambiente acogedor y sofisticado en tu hogar con nuestras soluciones de diseño para comedores. Cada pieza está diseñada para ofrecer tanto funcionalidad como estilo, proporcionando el escenario perfecto para cenas familiares y reuniones sociales. Con una combinación de materiales de alta calidad y un diseño contemporáneo, nuestros comedores están pensados para realzar la belleza de tu hogar mientras brindan comodidad y durabilidad. Descubre cómo nuestras opciones pueden transformar tu comedor en un espacio donde cada comida se convierte en una experiencia memorable.{" "}
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
          <Col sm={12} lg={6}>
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
          <Col sm={12} lg={6} className="flex flex-col justify-center">
                  <h2 className={`text-3xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}>Cocina</h2>
                  <p className="text-left mb-4 font-normal">
                  Transforma tu cocina en el corazón del hogar con nuestras soluciones de diseño innovadoras. Cada pieza está meticulosamente diseñada para combinar estilo y funcionalidad, ofreciendo un espacio que no solo refleja tu buen gusto, sino que también optimiza la experiencia culinaria. Nuestras cocinas están pensadas para crear ambientes que inspiran creatividad y disfrute en cada comida.
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
            <Col sm={12} lg={6} className="flex justify-center lg:order-last">
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
            lg={6}
            className="flex flex-col justify-center lg:order-first"
          >
                  <h2 className={`text-4xl uppercase mb-4 mt-3 text-center lg:text-start ${abrilFatface.className}`}>Relax</h2>
                  <p className="text-left mb-4 lg:text-start font-normal">
                  Redefine el concepto de diversión en casa con nuestras áreas de entretenimiento diseñadas para combinar estilo y confort. Perfectas para reuniones sociales, noches de película o momentos de relajación, nuestras soluciones crean espacios que invitan a disfrutar y compartir. Encuentra la inspiración para transformar tu hogar en el lugar ideal para el ocio y el disfrute.
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
