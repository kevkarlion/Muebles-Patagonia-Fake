"use client";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Abril_Fatface } from "next/font/google";
import styles from "./Presentation.module.sass";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

export const Presentation = () => {
  return (
    <div className="w-full flex pt-20 h-[700px] mb-1" id="home">
      <div className={` ${styles["bg-hero"]} relative w-full h-auto`}>
        <div className="flex flex-col h-full px-3 items-center text-center justify-center  z-10">
          <div className="flex flex-col flex-1 w-full mb-14  items-center justify-center lg:items-start lg:w-3/4  lg:self-start  lg:pl-9 lg:mb-36 ">
            <motion.h1
              transition={{
                duration: .5
              }}
              initial={{
                opacity: 0, 
                y: 0 
              }}
              animate={{
                y: 80,
                opacity: 1,
              }}
              className={`${abrilFatface.className} relative top-[-80px] uppercase lg:w-[700px] xl:w-[800px] lg:text-6xl  text-5xl px-4 text-white drop-shadow-xl mb-6 mt-6 lg:text-start `}
            >
              Muebles de Diseño Exclusivo para Cada Espacio
          </motion.h1>
          <motion.h2
              
              transition={{
                duration: .5,
                delay: .5,
                ease: 'easeInOut'
              }}
              initial={{
                opacity: 0, 
                y: 0 
              }}
              animate={{
                y: 80,
                opacity: 1,
              }}
              className="text-xl relative top-[-80px] w-[280px] md:w-[450px] lg:w-[500px]  font-light px-4 md:text-2xl  text-white drop-shadow-xl lg:text-xl lg:text-start lg:pr-28 xl:pr-96">
                Descubre la perfecta combinación de elegancia y durabilidad con
                nuestras piezas de diseño. Transforma tu hogar con estilo.
          </motion.h2>
            <Button className="text-black self-center hover:bg-amber-400 w-60 !h-14 mt-4 lg:self-start lg:ml-4  lg:h-11	uppercase border-black border-3  bg-amber-300 relative ">
              <span className="flex justify-center items-center w-full">
                Ofertas Especiales
                <Image
                  className="absolute right-[5px] bottom-[5px]"
                  width={25}
                  height={25}
                  alt="icon-click"
                  src={"/icons/click-hand.svg"}
                />
              </span>
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
