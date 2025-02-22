import {  useState } from "react";
import { OpcionHome } from "./OpcionHome";

export default function componentName() {

    const [activeESP, setActiveESP] = useState(false);
    const [activeENG, setActiveENG] = useState(false);

    const handleOpcionESP = () => {
      if(!activeESP){
        setActiveESP(true)
        setActiveENG(false)
        window.location.href = '/'
      }
    }

    const handleOpcionENG = () => {
      if(!activeENG){
        setActiveENG(true)
        setActiveESP(false)
        window.location.href = '/en-US'
      }
    }

  return (
    <div className="flex gap-4">
      <OpcionHome  idioma="ES" handleActive={handleOpcionESP}/>
      <OpcionHome idioma="EN" handleActive={handleOpcionENG}/>
    </div>
  );
}
