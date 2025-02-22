import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./MenuStore";
import OpcionesIdioma from "../botonHeaderMX/botonHeaderES/OpcionesIdioma";

interface Props {
  idioma: string;
}

export const Slider = ({ idioma }: Props) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const [servicios, setServicios] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#000] transition-opacity duration-500 ease-in-out 
          ${$isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
        onClick={() => isMenuOpen.set(false)}
      />
      <aside
        className={`text-xl text-white bg-[#26282D] w-[319px] h-full top-0 right-0 z-50 fixed p-10 flex flex-col gap-4
    transform opacity-100 border-l-4
    transition-all duration-700 ease-in-out text-[#FFF]
          ${
            $isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="mt-4 hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out"
          onClick={() => setServicios(!servicios)}
        >
          {idioma === "es" ? "Servicios" : "Services"}{" "}
          <span
            className={`inline-block transition-transform duration-300 ${
              servicios ? "rotate-90" : ""
            }`}
          >
            {">"}
          </span>
        </p>
        <div
          className={`flex flex-col gap-4 ml-2 transition-all duration-500 ease-in-out overflow-hidden ${
            servicios ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href={`${
              idioma === "es"
                ? "/servicios/desarrollo-web-a-la-medida"
                : "/en-US/services/custom-web-development"
            }`}
            className="text-sm font-extralight hover:text-green-cumtual transition-colors ease-in-out delay-100 duration-200"
          >
            {idioma === "es"
              ? "Desarrollo web a la medida"
              : "Custom Web Development"}
          </a>
          <a
            href={`${
              idioma === "es"
                ? "/servicios/almacenamiento-en-la-nube"
                : "/en-US/services/cloud-storage"
            }`}
            className="text-sm font-extralight hover:text-green-cumtual transition-colors ease-in-out delay-100 duration-200"
          >
            {idioma === "es" ? "Almacenamiento en la nube" : "Cloud Storage"}
          </a>
          <a
            href={`${
              idioma === "es"
                ? "/servicios/portafolio-logos"
                : "/en-US/services/logos"
            }`}
            className="text-sm font-extralight hover:text-green-cumtual transition-colors ease-in-out delay-100 duration-200"
          >
            {idioma === "es" ? "Logos" : "Work Samples Logos"}
          </a>
        </div>
        <a
          href={`${
            idioma === "es" ? "/acerca-de-nosotros" : "/en-US/about-us"
          }`}
          className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out"
        >
          {idioma === "es" ? "Acerca de nosotros" : "About Us"}
        </a>
        <a
          href={`${idioma === "es" ? "/contactanos" : "/en-US/contact-us"}`}
          className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out mt-4"
        >
          {idioma === "es" ? "Contáctanos" : "Contact Us"}
        </a>
        <div className="mt-4">
          <OpcionesIdioma idioma={idioma} />
        </div>
      </aside>
    </>
  );
};
