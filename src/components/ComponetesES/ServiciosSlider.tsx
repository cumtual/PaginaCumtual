import { useStore } from "@nanostores/react";
import { isSliderOpen } from "./MenuStore";
import { useState } from "react";


interface ServiciosSliderProps {
  idioma: string
}

const ServiciosSlider = ({idioma}: ServiciosSliderProps) => {
  const $isSliderOpen = useStore(isSliderOpen);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    isSliderOpen.set(true);
  };

  const handleMouseLeave = () => {
    setTimeout(()=>{
      setIsHovering(false);
      isSliderOpen.set(false);
    }, 1000)
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute flex justify-center items-center mt-4 left-0 top-16 bg-bg-gray-cumtual text-white w-screen z-50 transition-all duration-300 ${
        $isSliderOpen || isHovering ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
      } overflow-hidden`}
    >
      <ul className="p-4 text-center">
        <li className="py-2 cursor-pointer font-[400] text-[18px] leading-[25.99px] text-[#FFF] hover:text-[#777] ease-in-out transition-colors delay-100 duration-300">
          
          {idioma === 'es' ? 
          <a href="/servicios/desarrollo-web-a-la-medida">Desarrollo web a la medida</a>
          : 
          <a href="/en-US/services/custom-web-development">Custom web development</a>
          }
        </li>
        <li className="py-2 cursor-pointer font-[400] text-[18px] leading-[25.99px] text-[#FFF] hover:text-[#777] ease-in-out transition-colors delay-100 duration-300">
        {idioma === 'es' ? 
          <a href="/servicios/almacenamiento-en-la-nube">Almacenamiento en la nube</a>
          : 
          <a href="/en-US/services/cloud-storage">Cloud storage</a>
          }
        </li>
        <li className="py-2 cursor-pointer font-[400] text-[18px] leading-[25.99px] text-[#FFF] hover:text-[#777] ease-in-out transition-colors delay-100 duration-300">
        {idioma === 'es' ? 
          <a href="/servicios/portafolio-logos">Logos</a>
          : 
          <a href="/en-US/services/logos">Logos</a>
          }
        </li>
      </ul>
    </div>
  );
};

export default ServiciosSlider;
