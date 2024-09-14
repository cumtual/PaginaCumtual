import React from "react";

interface Props {
  idioma: string;
  active: boolean;
  handleActive: () => void;
}

export const Boton = ({ idioma, active, handleActive }: Props) => {
  return (
    <>
      <button
        className={`${
          active
            ? "bg-gradient-to-tr from-green-cumtual to-blue-cumtual"
            : "bg-[#FFF]"
        } w-[43px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer text-[#191A1E]`}
        onClick={handleActive}
      >
        {idioma}
      </button>
    </>
  );
};
