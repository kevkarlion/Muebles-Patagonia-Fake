import { color } from "framer-motion";
import Image from "next/image";

import styles from './Footer.module.sass'


export const Footer = () => {
  return (
    
      <footer className={`text-white py-4 mt-auto ${styles['container-footer']}`}>
        <div className="container mt-12 sm:px-8 ">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between lg:mx-40">
            <div className="flex flex-col justify-start items-center">
              <h5 className="text-xl">Visita nuestras redes</h5>
              <ul className="flex flex-col gap-3 mt-12 ml-4">
                <li className="flex gap-4 ">
                  <Image 
                        width={30}
                        height={30}
                        src={'redes/instagram.svg'}
                        alt="instagram"
                  />
                  <a href="#" className="text-white">
                    Instagram
                  </a>
                </li>
                <li className="flex gap-4">
                  <Image 
                        width={30}
                        height={30}
                        src={'redes/facebook.svg'}
                        alt="facebook"
                  />
                  <a href="#" className="text-white">
                    Facebook
                  </a>
                </li>
                <li className="flex gap-4 mb-5">
                  <Image 
                        width={30}
                        height={30}
                        src={'redes/whatsapp.svg'}
                        alt="whatsapp"
                  />
                  <a href="#" className="text-white">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 flex flex-col items-center justify-center">
              <h5 className="text-xl text-center">Contacto</h5>
              <address className="flex flex-col gap-3 mt-12 ml-4 text-center">
                <div className="flex">
                  <Image 
                    width={30}
                    height={30}
                    src={'/googlemaps.svg'}
                    alt="whatsapp"
                    className="inline mr-6"
                  />
                  <div className="inline-block text-start">
                   Calle Falsa 123
                    <br />
                    General Roca, Río Negro
                    <br />
                  </div>
                </div>
             
                <a href="mailto:email@ejemplo.com" className="text-white">
                  email@ejemplo.com
                </a>
                <br />
                Teléfono: +123 456 7890
              </address>
            </div>
          </div>
          <div className="row mt-16">
            <div className="col text-center">
              <p className="mb-0">
                &copy; 2024 MUEBLES PATAGONIA. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    
  );
};
