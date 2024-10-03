import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from './MenuStore';
import OpcionesIdioma from '../botonHeaderMX/botonHeaderES/OpcionesIdioma';

interface Props {
  idioma: string;
}

export const Slider = ({ idioma }: Props) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const [servicios, setServicios] = useState(false);

  return (
    <>
      <div 
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out 
          ${$isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => isMenuOpen.set(false)}
      />
      <aside
        className={`text-xl text-white bg-[#26282D] w-[319px] h-full top-0 right-0 z-50 fixed p-10 flex flex-col gap-4 text-[#FFF]
          transform  transition-opacity duration-700 ease-in-out
          ${$isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 delay-200'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p 
          className="mt-4 hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out" 
          onClick={() => setServicios(!servicios)}
        >
          {idioma === 'es' ? 'Servicios' : 'Services'} <span className={`inline-block transition-transform duration-300 ${servicios ? 'rotate-90' : ''}`}>{'>'}</span>
        </p>
        <div
          className={`flex flex-col gap-4 ml-2 transition-all duration-500 ease-in-out overflow-hidden ${servicios ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <a href={`${idioma === 'es' ? "/es-ES/servicios/desarrollo-web-a-la-medida" : '/es-EN/services/desarrollo-web-a-la-medida'}`} className="text-sm font-extralight hover:text-green-cumtual transition-colors ease-in-out delay-100 duration-200">{idioma === 'es' ? 'Desarrollo web a la medida' : 'Custom Web Development'}</a>
          <a href={`${idioma === 'es' ? "/es-ES/servicios/almacenamiento-en-la-nube" : '/es-EN/services/cloud-storage'}`} className="text-sm font-extralight hover:text-green-cumtual transition-colors ease-in-out delay-100 duration-200">{idioma === 'es' ? 'Almacenamiento en la nube' : 'Cloud Storage'}</a>
          <a href={`${idioma === 'es' ? "/es-ES/servicios/portafolio-logo" : '/es-EN/services/work-samples-logos'}`} className="text-sm font-extralight hover:text-green-cumtual transition-colors ease-in-out delay-100 duration-200">{idioma === 'es' ? 'Logos' : 'Work Samples Logos'}</a>
        </div>
        <p className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out">{idioma === 'es' ? 'Acerca de nosotros' : 'About Us'}</p>
        <p className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out mt-4">{idioma === 'es' ? 'Contáctanos' : 'Contact Us'}</p>
        <div className="mt-4">
          <OpcionesIdioma idioma={idioma} />
        </div>
      </aside>
    </>
  );
};
