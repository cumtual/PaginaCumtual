import {  useState } from "react";
import { Boton } from "../botonHeaderMX/botonHeaderES/Boton";
import { OpcionHome } from "./OpcionHome";

export default function componentName() {

    const [activeESP, setActiveESP] = useState(false);
    const [activeENG, setActiveENG] = useState(false);

    const handleOpcionESP = () => {
      if(!activeESP){
        setActiveESP(true)
        setActiveENG(false)
        window.location.href = '/es-ES'
      }
    }

    const handleOpcionENG = () => {
      if(!activeENG){
        setActiveENG(true)
        setActiveESP(false)
        window.location.href = '/en-EN'
      }
    }

  return (
    <div className="flex gap-4">
      <OpcionHome  idioma="ES" handleActive={handleOpcionESP}/>
      <OpcionHome idioma="EN" handleActive={handleOpcionENG}/>
    </div>
  );
}
