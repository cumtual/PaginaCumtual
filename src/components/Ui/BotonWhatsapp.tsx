
import { FloatingWhatsApp } from 'react-floating-whatsapp'

interface Props {
  idioma: 'es' | 'en';
}


export const BotonWhatsapp = ({idioma} : Props) => {
  if(idioma === 'es'){
    return (
      <>
          <FloatingWhatsApp  buttonClassName='mb-[40px]' darkMode={true} statusMessage='En linea' chatMessage=' ¡Hola!, Pláticanos de tu proyecto.' accountName='Cumtual' avatar="/favicon.svg" phoneNumber='+525627002216'/>
      </>
    )
  }
  return (
    <>
        <FloatingWhatsApp darkMode={true} statusMessage='Online' chatMessage=' Hi! What can I do for you?' accountName='Cumtual' avatar="/favicon.svg"  phoneNumber='+525627002216'/>
    </>
  )
}
