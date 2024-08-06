
import Button from 'react-bootstrap/Button';

import { Abril_Fatface } from "next/font/google";
import styles from "./Presentation.module.sass";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

export const Presentation = () => {


      
  return (
    <div className="w-full flex pt-20 h-[800px] mb-1" id="home">
      <div className={` ${styles["bg-hero"]} relative w-full h-[800px]`}>
        <div className="flex flex-col h-full px-3 items-center text-center justify-center  z-10">
          <div className="flex flex-col flex-1 w-full mb-14  items-center justify-center lg:w-3/4  lg:self-start  lg:pl-9 lg:mb-36 ">
            <h1
              className={`${abrilFatface.className} uppercase text-6xl px-4 text-white drop-shadow-xl mb-6 mt-6 lg:text-start `}
            >
              Muebles de Diseño Exclusivo para Cada Espacio
            </h1>
            <h2 className="text-2xl font-normal px-9 md:text-2xl  text-white drop-shadow-xl lg:text-xl lg:text-start lg:pr-28 xl:pr-96">
              Descubre la perfecta combinación de elegancia y durabilidad con
              nuestras piezas de diseño y muebles industriales. Transforma tu
              hogar con estilo.
            </h2>
            <Button variant="light" className='self-center w-56 mt-4 lg:self-start lg:ml-9  lg:h-11	uppercase' >Ofertas especiales</Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};


