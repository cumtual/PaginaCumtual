import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios, { type AxiosResponse } from "axios";
import "@styles/globals.css";
enum tipoServicios {
  landing_page = "Landing page",
  logos = "Logos",
  almacenamiento_en_la_nube = "Almacenamiento en la nube",
  e_commerce_personalizado = "E commerce personalizado",
  sistemas_administrativos = "Sistemas administrativos",
  blogs = "Blogs",
  catalogo_de_productos_administrables = "Catálogo de productos administrables",
}
const servicioIds: Record<string, number> = {
  "Landing page": 1,
  Logos: 2,
  "Almacenamiento en la nube": 3,
  "E commerce personalizado": 4,
  "Sistemas administrativos": 5,
  Blogs: 6,
  "Catálogo de productos administrables": 7,
};

enum giroEmpresarial {
  biener_raices = "Bienes Raíces",
  transporte_y_logistica = "Transporte y Logística",
  salud = "Salud",
  agricultura_y_ganaderia = "Agricultura y Ganadería",
  tecnologia = "Tecnología",
  finanzas = "Finanzas",
  educacion = "Educación",
  otro = "Otro",
}
const giroEmpresarialIds: Record<string, number> = {
  "Bienes Raíces": 1,
  "Transporte y Logística": 2,
  Salud: 3,
  "Agricultura y Ganadería": 4,
  Tecnología: 5,
  Finanzas: 6,
  Educación: 7,
  Otro: 8,
};
enum horario {
  mañana = "Por la mañana ( 9am - 12pm)",
  medioDia = "Medio día ( 12pm - 2pm )",
  tarde = "Por la tarde ( 4pm - 6pm )",
}

interface FormData {
  nombre: string;
  email: string;
  tipoServicio: tipoServicios;
  giroEmpresarial: giroEmpresarial;
  whatsApp?: string;
  horarioContacto?: horario;
  platicanosProyecto: string;
  lada?: string;
}

interface Country {
  name: string;
  callingCode: string;
}

interface ComponentsProps {
  BACK_URL: string;
}

const countries: Country[] = [
  { name: "United States", callingCode: "+1" },
  { name: "Mexico", callingCode: "+52" },
  { name: "Argentina", callingCode: "+54" },
  { name: "Spain", callingCode: "+34" },
  { name: "United Kingdom", callingCode: "+44" },
];

export const Formulario = ({ BACK_URL }: ComponentsProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register: registroContacto,
    handleSubmit,
    formState: { errors: errorsContacto },
    clearErrors: clearRegistroErrors,
  } = useForm<FormData>();

  const onSubmitRegistro: SubmitHandler<FormData> = async (data) => {
    try {
      const dataSend = {
        strFullName: data.nombre,
        strEmail: data.email,
        intTipoServ: +data.tipoServicio,
        intBuisness: +data.giroEmpresarial,
        strPhone: `${data.lada} ${data.whatsApp}`,
        strScheduleContact: data.horarioContacto,
        strProjectDescription: data.platicanosProyecto,
        language: "es",
      };
      setLoading(true);
      const dataBack: AxiosResponse = await axios.post(
        `${BACK_URL}/api/leads/save-lead`,
        dataSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage("Formulario enviado");
      setTimeout(() => {
        setLoading(false);
        window.location.reload();
      }, 3000);
      return;
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitRegistro)}
      className="w-full flex flex-col gap-4 items-center md:w-[656px] lg:w-[756px]"
      noValidate
    >
      {successMessage.length > 0 && (
        <div className="flex justify-center items-center">
          <span className="bg-[#16a34a ] text-white rounded-md my-4 text-center">
            {successMessage}
          </span>
        </div>
      )}
      {errorMessage.length > 0 && (
        <div className="flex justify-center items-center">
          <span className="bg-red-600 text-white p-2 rounded-md my-4 text-center">
            {errorMessage}
          </span>
        </div>
      )}
      <div className="md:flex md:gap-4 md:w-[654px] lg:w-[754px] md:justify-between">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Nombre <span className="text-[#FF0000]">*</span>
          </label>
          <input
            className="w-[340px] h-[44px] md:w-[317px] lg:w-[367px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
            type="text"
            placeholder="Nombre Completo"
            id="name"
            {...registroContacto("nombre", {
              required: "Nombre es requerido",
            })}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <label
            htmlFor="email"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Email <span className="text-[#FF0000]">*</span>
          </label>
          <input
            className="w-[340px] h-[44px] md:w-[317px] lg:w-[367px] rounded-[4px] bg-[rgb(38,40,45)] px-2 text-[14px] font-300"
            type="email"
            placeholder="Email"
            id="email"
            {...registroContacto("email", {
              required: "Email es requerido",
            })}
          />
        </div>
      </div>
      <div className="md:flex md:gap-4 md:w-[654px] lg:w-[754px] md:justify-between">
        <div className="flex flex-col gap-2 mt-0 ">
          <label
            htmlFor="tipoServicio"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Tipo de servicio <span className="text-[#FF0000]">*</span>
          </label>
          <select
            name="tipoServicio"
            id="tipoServicio"
            className=" w-[340px] h-[44px] md:w-[317px] lg:w-[367px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
            {...registroContacto("tipoServicio", {
              required: "Tipo de servicio requerido",
            })}
          >
            <option value="">Seleccione un servicio</option>
            {Object.values(tipoServicios).map((servicio) => (
              <option key={servicio} value={servicioIds[servicio]}>
                {servicio}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <label
            htmlFor="giroEmpresarial"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Giro empresarial <span className="text-[#FF0000]">*</span>
          </label>
          <select
            name="giroEmpresarial"
            id="giroEmpresarial"
            className=" w-[340px] md:w-[317px] lg:w-[367px] h-[44px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
            {...registroContacto("giroEmpresarial", {
              required: "Giro Empresarial Requerido",
            })}
          >
            <option value="">Seleccione un Giro Empresarial</option>
            {Object.values(giroEmpresarial).map((giro) => (
              <option key={giro} value={giroEmpresarialIds[giro]}>
                {giro}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="md:flex md:gap-4 md:w-[654px] lg:w-[754px] md:justify-between">
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="lada"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            WhatsApp con lada de país
          </label>
          <div className="w-[340px] md:w-[317px] lg:w-[367px] h-[44px] rounded-[4px] bg-[rgb(38,40,45)] px-2 text-[14px] font-300 flex justify-center items-center gap-4">
            <select
              className="w-[60px] md:w-[67px] h-[44px] bg-[rgb(38,40,45)]" id="lada"
              {...registroContacto("lada", {
                required: "Lada es requerida",
              })}
            >
              <option value="">--</option>
              {countries.map((country) => (
                <option value={country.callingCode} key={country.callingCode}>
                  {country.callingCode}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="telephone"
              placeholder="WhatsApp de contacto"
              id="whatsApp"
              className="w-[300px] h-[44px] bg-[rgb(38,40,45)]"
              minLength={10}
              maxLength={10}
              {...registroContacto("whatsApp", {
                required: "WhatsApp requerido",
              })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <label
            htmlFor="horarioContacto"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Horario para ser contactado
          </label>
          <select
            name="horarioContacto"
            id="horarioContacto"
            className=" w-[340px] md:w-[317px] lg:w-[367px] h-[44px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
            {...registroContacto("horarioContacto", {
              required: "Horario de contacto requerido",
            })}
          >
            <option value="">Seleccione un horario</option>
            {Object.values(horario).map((horariocontacto) => (
              <option key={horariocontacto} value={horariocontacto}>
                {horariocontacto}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-0 md:mt-0 md:w-[654px] lg:w-[754px]">
        <label
          htmlFor="platicanosProyecto"
          className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
        >
          Pláticanos de tu proyecto <span className="text-[#FF0000]">*</span>
        </label>
        <textarea
          className="w-[340px] md:w-[656px] lg:w-[756px] md:h-[407px] h-[243px] rounded-[4px] bg-[#26282D] p-2"
          name="platicanosProyecto"
          id="platicanosProyecto"
          placeholder="Escribe aquí..."
          maxLength={200}
          {...registroContacto("platicanosProyecto", {
            required: "Platicanos sobre tu proyecto es requerido",
          })}
        ></textarea>
      </div>
      <button className="btn btn-white mt-4" type="submit" disabled={loading ? true : false} >
        Enviar
      </button>
    </form>
  );
};
