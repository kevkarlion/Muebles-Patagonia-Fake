import Button from "react-bootstrap/Button";
import { Abril_Fatface } from "next/font/google";
import styles from "./AboutUs.module.sass";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

export const AboutUs = () => {
  return (
    <div
      className={` ${styles["container-main"]} flex flex-col mt-10 justify-center items-center text-center px-10 md:gap-11 mb-8 md:mb-16 container`} id="about-us"
      
    >
      <div className="mb-14 w-full flex flex-col items-start mt-9 gap-4 md:flex-row ">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1
            className={`${styles["title-section"]} uppercase text-5xl max-w-max font-semibold sm:text-6xl md:whitespace-nowrap md:text-start mb-2 `} 
          >
            Sobre nosotros
          </h1>
          <div className="flex flex-col w-full ">
            <p className="mt-2 text-xl md:text-start md:w-96 mb-4 font-light">
              Somos la marca número uno en muebles de diseño, donde estilo y
              exclusividad se encuentran.
            </p>
            <Button
              href="#form"
              variant="dark"
              className="flex items-center justify-center self-center bg-yellow-400 hover:bg-yellow-500 border-1 border-black text-black w-44 md:w-48 md:h-14  md:self-start md:mt-4 uppercase "
            >
              contactanos
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 ">
        <h2
          className={`${abrilFatface.className} self-center  text-2xl mb-2 md:w-1/4 md:text-2xl md:self-start`}
        >
          Nuestra historia
        </h2>
        <p
          className={` ${styles["p-afer"]} relative mb-6 font-light md:w-3/4 md:p-6 text-start md:self-start md:py-0 md:px-20`}
        >
          Desde nuestros inicios, hemos creído en el poder del diseño para
          transformar espacios y vidas. Fundada en 2010, nuestra empresa nació
          del deseo de ofrecer muebles que combinan funcionalidad y estética.
          Comenzamos como un pequeño taller artesanal y, con el tiempo, hemos
          crecido hasta convertirnos en una marca reconocida por nuestra
          dedicación a la calidad y el diseño innovador. Cada pieza que
          ofrecemos es el resultado de una meticulosa atención al detalle y un
          profundo respeto por los materiales.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 ">
        <h2
          className={`${abrilFatface.className} self-center font-extralight text-2xl mb-2 md:w-1/4 md:text-2xl md:self-start`}
        >
          Misión
        </h2>
        <p
          className={` ${styles["p-afer"]} relative mb-6 font-light md:w-3/4 md:p-6 text-start md:self-start md:py-0 md:px-20`}
        >
          Nuestra misión es proporcionar muebles de alta calidad que inspiren y
          mejoren los espacios de nuestros clientes. Creemos en el diseño
          accesible y en la creación de productos que sean tanto funcionales
          como bellos. Nos esforzamos por ofrecer una experiencia de compra
          excepcional, desde el primer contacto hasta la entrega final,
          asegurando que cada cliente encuentre el mueble perfecto para su hogar
          u oficina.
        </p>
      </div>
    </div>
  );
};
