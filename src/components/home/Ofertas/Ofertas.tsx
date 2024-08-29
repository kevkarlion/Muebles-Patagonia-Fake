"use client";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

import styles from "./Ofertas.module.sass";

export const Ofertas = () => {
  return (
    <div className="mt-20 mb-8 w-full overflow-hidden">
      <div className="w-full flex justify-center  mb-12 ">
        <h1
          className={` ${styles["title-hero"]} uppercase absolute top-[160px] text-white z-10 flex justify-center text-6xl text-center   font-bold sm:text-7xl md:!text-7xl xl:!text-7xl border-b-2  `}
        >
          Ofertas
        </h1>
        <h2 className="uppercase absolute top-[245px] sm:top-[265px] text-white  z-10 flex justify-center text-base text-center w-60  font-light  md:text-xl drop-shadow-xl ">
          Conocé todas las promociones disponibles, comprando desde nuestra web!{" "}
        </h2>
        <div className="relative w-full  h-[550px]  brightness-50">
          <Image
            className=""
            src="/categorias/hero-categorias-1200.webp"
            fill={true}
            sizes="(max-width: 768px) 50vw, 100vw"
            alt="sillon-blanco"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <h2
        className={` ${styles["title-hero"]} uppercase   flex justify-center text-6xl text-center   font-bold sm:text-7xl md:!text-7xl xl:!text-7xl  mb-10 mt-28 `}
      >
        Living
      </h2>
      <div className="w-full flex justify-center">
        <div className={` ${styles["container-grid"]} `}>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-futon.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Luxura Home
                </Card.Title>
                <Card.Text className="font-light">
                  Asiento acogedor acompañado de un puf a juego que añade un
                  toque de sofisticación y funcionalidad a cualquier espacio
                </Card.Text>
                {/* <Button className="mt-3" variant="dark">Más info</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black ">
                <Image
                  className="rounded-lg object-left-bottom"
                  src="/categorias/living/sillon-blanco.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Nieve Luxe
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-b-md">
                <Image
                  className=" object-right-bottom"
                  src="/categorias/living/sillon-blanco-grande.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0  ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Blanco Majestic
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-md ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-gris.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 b">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Gris Elegance
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <h2
        className={` ${styles["title-hero"]} uppercase   flex justify-center text-6xl text-center   font-bold sm:text-7xl md:!text-7xl xl:!text-7xl  mb-10 mt-28 `}
      >
        Comedor
      </h2>
      <div className="w-full flex justify-center">
        <div className={` ${styles["container-grid"]} `}>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-futon.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Luxura Home
                </Card.Title>
                <Card.Text className="font-light">
                  Asiento acogedor acompañado de un puf a juego que añade un
                  toque de sofisticación y funcionalidad a cualquier espacio
                </Card.Text>
                {/* <Button className="mt-3" variant="dark">Más info</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black ">
                <Image
                  className="rounded-lg object-left-bottom"
                  src="/categorias/living/sillon-blanco.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Nieve Luxe
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-b-md">
                <Image
                  className=" object-right-bottom"
                  src="/categorias/living/sillon-blanco-grande.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0  ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Blanco Majestic
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-md ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-gris.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 b">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Gris Elegance
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <h2
        className={` ${styles["title-hero"]} uppercase   flex justify-center text-6xl text-center   font-bold sm:text-7xl md:!text-7xl xl:!text-7xl  mb-10 mt-28 `}
      >
        Cocina
      </h2>
      <div className="w-full flex justify-center">
        <div className={` ${styles["container-grid"]} `}>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-futon.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Luxura Home
                </Card.Title>
                <Card.Text className="font-light">
                  Asiento acogedor acompañado de un puf a juego que añade un
                  toque de sofisticación y funcionalidad a cualquier espacio
                </Card.Text>
                {/* <Button className="mt-3" variant="dark">Más info</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black ">
                <Image
                  className="rounded-lg object-left-bottom"
                  src="/categorias/living/sillon-blanco.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Nieve Luxe
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-b-md">
                <Image
                  className=" object-right-bottom"
                  src="/categorias/living/sillon-blanco-grande.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0  ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Blanco Majestic
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-md ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-gris.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 b">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Gris Elegance
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <h2
        className={` ${styles["title-hero"]} uppercase   flex justify-center text-6xl text-center   font-bold sm:text-7xl md:!text-7xl xl:!text-7xl  mb-10 mt-28 `}
      >
        Relax
      </h2>
      <div className="w-full flex justify-center">
        <div className={` ${styles["container-grid"]} `}>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-futon.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Luxura Home
                </Card.Title>
                <Card.Text className="font-light">
                  Asiento acogedor acompañado de un puf a juego que añade un
                  toque de sofisticación y funcionalidad a cualquier espacio
                </Card.Text>
                {/* <Button className="mt-3" variant="dark">Más info</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black ">
                <Image
                  className="rounded-lg object-left-bottom"
                  src="/categorias/living/sillon-blanco.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Nieve Luxe
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-b-md">
                <Image
                  className=" object-right-bottom"
                  src="/categorias/living/sillon-blanco-grande.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0  ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Blanco Majestic
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="">
            {" "}
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative bg-black rounded-md ">
                <Image
                  className=" object-left-bottom"
                  src="/categorias/living/sillon-gris.webp"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt="sillon-blanco"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 b">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">
                  Gris Elegance
                </Card.Title>
                <Card.Text className="font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
