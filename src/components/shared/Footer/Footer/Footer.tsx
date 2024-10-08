import Image from "next/image";

import styles from "./Footer.module.sass";

export const Footer = () => {
  return (
    <footer
      className={` text-white py-4 sm:h-[480px] ${styles["container-footer"]} font-roboto`}
      id="redes"
    >
      <div className="flex flex-col    items-center h-full  flex-1 justify-end  sm:px-8 ">
        {/* contenedor redes y contacto */}
        <div className="flex flex-col mb-12 mt-8 flex-1 h-full items-center justify-center  gap-3 sm:mb-32 sm:flex-row sm:w-full sm:justify-evenly lg:mx-40 sm:items-end">
          {/* contenedor redes */}
          <div className="flex flex-col justify-start items-center  md:!mb-0">
            <h5 className="text-xl border-b-[1px] pb-1">
              Visitá nuestras redes
            </h5>
            <ul className="flex flex-col gap-3 mt-6  font-light">
              <li className="flex gap-4 ">
                <Image
                  width={30}
                  height={30}
                  src={'/redes/instagram.svg'}
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
                  src={'/redes/facebook.svg'}
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
                  src={'/redes/whatsapp.svg'}
                  alt="whatsapp"
                />
                <a href="#" className="text-white">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          {/* contenedor contacto */}
          <div className="col-md-4 flex flex-col items-center justify-center">
            <h5 className="text-xl text-center  border-b-[1px] pb-1">
              Contacto
            </h5>
            <address className="flex flex-col gap-3 mt-6 ml-4 text-center">
              <div className="flex flex-col gap-4 text-center font-light">
                <div className="flex items-center gap-2">
                  <Image
                    width={30}
                    height={30}
                    src={'/googlemaps.svg'}
                    alt="location"
                    className=""
                  />
                  <div className="inline-block text-start whitespace-nowrap">
                    Av. Roca 123
                    <br />
                    General Roca, Río Negro
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    width={30}
                    height={30}
                    src={"/mailfree.svg"}
                    alt="mail"
                    className=""
                  />
                  <a href="#" className="text-white">
                    email@ejemplo.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    width={30}
                    height={30}
                    src={"/phonefree.svg"}
                    alt="phone"
                    className=""
                  />
                  <span>Cel: +123 456 7890</span>
                </div>
              </div>
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col text-center font-light ">
            <p className="mb-0 text-sm">
              &copy; 2024 MUEBLES PATAGONIA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
