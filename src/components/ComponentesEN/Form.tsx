import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import "../../styles/globals.css";
enum serviceType {
    landing_page = "Landing Page",
    logos = "Logos",
    cloud_storage = "Cloud Storage",
    custom_e_commerce = "Custom E-commerce",
    administrative_systems = "Administrative Systems",
    blogs = "Blogs",
    manageable_product_catalog = "Manageable Product Catalog",
  }
  


enum businessSector {
    real_estate = "Real Estate",
    transportation_and_logistics = "Transportation and Logistics",
    health = "Health",
    agriculture_and_livestock = "Agriculture and Livestock",
    technology = "Technology",
    finance = "Finance",
    education = "Education",
    other = "Other",
  }
  

  enum timeSlot {
    morning = "Morning (9am - 12pm)",
    noon = "Noon (12pm - 2pm)",
    afternoon = "Afternoon (4pm - 6pm)",
  }
  

interface FormData {
  nombre: string;
  email: string;
  tipoServicio: serviceType;
  giroEmpresarial: businessSector;
  whatsApp?: string;
  horarioContacto?: timeSlot;
  platicanosProyecto: string;
}

interface Country {
  name: string;
  callingCode: string;
}

const countries: Country[] = [
  { name: "United States", callingCode: "1" },
  { name: "Mexico", callingCode: "52" },
  { name: "Argentina", callingCode: "54" },
  { name: "Spain", callingCode: "34" },
  { name: "United Kingdom", callingCode: "44" },
];

export const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register: registroContacto,
    handleSubmit: handleRegistroSubmit,
    formState: { errors: errorsContacto },
    clearErrors: clearRegistroErrors,
  } = useForm<FormData>();

  const onSubmitRegistro: SubmitHandler<FormData> = async (data) => {
    event?.preventDefault();
    if (
      [
        data.nombre,
        data.email,
        data.tipoServicio,
        data.giroEmpresarial,
        data.platicanosProyecto,
      ].includes("")
    ) {
      return;
    }
    try {
      //logica de back
      return console.log("enviando");
    } catch (error) {
      //error back
      return console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleRegistroSubmit(onSubmitRegistro)}
      className="w-full flex flex-col gap-4 items-center md:w-[756px]"
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
      <div className="md:flex md:gap-4 md:w-[754px] md:justify-between">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Name <span className="text-[#FF0000]">*</span>
          </label>
          <input
            className="w-[340px] h-[44px] md:w-[367px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
            type="text"
            placeholder="Nombre Completo"
            id="name"
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
            className="w-[340px] h-[44px] md:w-[367px] rounded-[4px] bg-[rgb(38,40,45)] px-2 text-[14px] font-300"
            type="email"
            placeholder="Email"
            id="email"
          />
        </div>
      </div>
      <div className="md:flex md:gap-4 md:w-[754px] md:justify-between">
        <div className="flex flex-col gap-2 mt-0 ">
          <label
            htmlFor="tipoServicio"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Service type <span className="text-[#FF0000]">*</span>
          </label>
          <select
            name="tipoServicio"
            id="tipoServicio"
            className=" w-[340px] h-[44px] md:w-[367px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
          >
            <option value="">Seleccione un servicio</option>
            {Object.values(serviceType).map((servicio) => (
              <option key={servicio} value={servicio}>
                {servicio}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
        <label
            htmlFor="tipoServicio"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Business sector <span className="text-[#FF0000]">*</span>
          </label>
          <select
            name="tipoServicio"
            id="tipoServicio"
            className=" w-[340px] md:w-[367px] h-[44px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
          >
            <option value="">Select a service</option>
            {Object.values(businessSector).map((giro) => (
              <option key={giro} value={giro}>
                {giro}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="md:flex md:gap-4 md:w-[754px] md:justify-between">
      <div className="flex flex-col gap-2 ">
      <label
            htmlFor="tipoServicio"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            WhatsApp with country code
          </label>
          <div className="w-[340px] md:w-[367px] h-[44px] rounded-[4px] bg-[rgb(38,40,45)] px-2 text-[14px] font-300 flex justify-center items-center gap-4">
            <select className="w-[60px] md:w-[67px] h-[44px] bg-[rgb(38,40,45)]">
              {countries.map((country) => (
                <option value={country.callingCode} key={country.callingCode}>
                  +{country.callingCode}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="telephone"
              placeholder="Contact WhatsApp"
              id="whatsApp"
              className="w-[300px] h-[44px] bg-[rgb(38,40,45)]"
              minLength={10}
              maxLength={10}
            />
          </div>
          
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <label
            htmlFor="horarioContacto"
            className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
          >
            Preferred contact hours
          </label>
          <select
            name="horarioContacto"
            id="horarioContacto"
            className=" w-[340px] md:w-[367px] h-[44px] rounded-[4px] bg-[#26282d] px-2 text-[14px] font-300"
          >
            <option value="">Select a time</option>
            {Object.values(timeSlot).map((horariocontacto) => (
              <option key={horariocontacto} value={horariocontacto}>
                {horariocontacto}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-0 md:mt-0 md:w-[754px]">
        <label
          htmlFor="platicanosProyecto"
          className="font-[700] text-[14px] md:text-[20px] leading-[18.19px] text-[#FFF] text-start"
        >
          Tell us about your project <span className="text-[#FF0000]">*</span>
        </label>
        <textarea
          className="w-[340px] md:w-[756px] md:h-[407px] h-[243px] rounded-[4px] bg-[#26282D] p-2"
          name="platicanosProyecto"
          id="platicanosProyecto"
          placeholder="Write here..."
          maxLength={200}
        ></textarea>
      </div>
      <button className="btn btn-white btn-animated mt-4">Send</button>
    </form>
  );
};
