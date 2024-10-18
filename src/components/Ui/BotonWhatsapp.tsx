import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoCumtual from '../../../public/favicon.svg'

interface Props {
  idioma: 'es' | 'en';
}


export const BotonWhatsapp = ({idioma} : Props) => {
  if(idioma === 'es'){
    return (
      <>
          <FloatingWhatsApp  buttonClassName='mb-20' darkMode={true} statusMessage='En linea' chatMessage=' ¡Hola!, Pláticanos de tu proyecto.' accountName='Cumtual' avatar={LogoCumtual.src} phoneNumber='+529535939919'/>
      </>
    )
  }
  return (
    <>
        <FloatingWhatsApp darkMode={true} statusMessage='Online' chatMessage=' Hi! What can I do for you?' accountName='Cumtual' avatar={LogoCumtual.src} phoneNumber='+529535939919'/>
    </>
  )
}
