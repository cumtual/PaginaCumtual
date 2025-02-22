import { useEffect, useState } from "react";
import { Boton } from "./Boton";

export default function componentName({idioma}) {

  useEffect(() => {
    if(idioma === 'es'){
      setActiveESP(true)
      setActiveENG(false)
    }else if(idioma === 'en'){
      setActiveENG(true)
      setActiveESP(false)
    }
  }, [idioma])

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
      <Boton active={activeESP} idioma="ES" handleActive={handleOpcionESP}/>
      <Boton active={activeENG} idioma="EN" handleActive={handleOpcionENG}/>
    </div>
  );
}
