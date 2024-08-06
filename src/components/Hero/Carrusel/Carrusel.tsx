"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import styles from './Carrusel.module.sass'

export const Carrusel = () => {
  return (
    <>
      <Carousel data-bs-theme="dark" className={`${styles['main-container']}`} >
        <Carousel.Item>
          <div className="relative w-full h-[650px]">
            <Image
              src="/images-carrusel/image1.jpg"

              //llenar
              fill={true}

              //Largest Contentful Paint (LCP) es una métrica que mide
              // el tiempo que tarda en cargarse y renderizarse
              //priority

              // El atributo sizes es importante para que el navegador sepa
              //  qué tamaño de imagen debe descargar en función del tamaño de 
              //  la ventana del navegador mejorando así el rendimiento de la página
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image-carrusel"
              
              //Fit:adaptar
              //atributo actualizado
              style={{ objectFit: 'cover' }}
            />
            <h1>Primer Slide</h1>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <div className="relative w-full h-[650px]">
            <Image
              src="/images-carrusel/image2.jpg"
              alt="image-carrusel"
              sizes="(max-width: 768px) 100vw, 33vw"
              fill={true}
              style={{ objectFit: 'cover' }}
            />
            <h1>Segundp Slide</h1>
          </div>
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className="relative w-full h-[650px]">
            <Image
              src="/images-carrusel/image3.jpg"
              alt="image-carrusel"
              fill={true}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <h1>Tercer Slide</h1>
          </div>
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
                        <p>
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
