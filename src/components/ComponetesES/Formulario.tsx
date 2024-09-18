import '../../styles/globals.css'


export const Formulario = () => {
  return (
    <form className="w-full flex flex-col gap-4 mt-4 items-center">
        <input className="w-[340px] h-[44px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300" type="text" placeholder="Nombre Completo" />
        <input className="w-[340px] h-[44px] rounded-[4px] bg-[rgb(38,40,45)] px-2 text-[14px] font-300" type="email" placeholder="Email" />
        <textarea className="w-[340px] h-[243px] rounded-[4px] bg-[#26282D] p-2" name="" id="" placeholder="Escribe aquí..."></textarea>
        <div className="btn btn-white btn-animated mt-4">Enviar</div>
    </form>
  )
}
