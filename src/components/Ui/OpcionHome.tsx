

interface Props {
  idioma: string;
  handleActive: () => void;
}

export const OpcionHome = ({ idioma, handleActive }: Props) => {
  return (
    <>
      <button
        className='bg-[#FFF] w-[43px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer text-[#191A1E] hover:bg-gradient-to-tr hover:from-green-cumtual hover:to-blue-cumtual ease-in-out transition-colors delay-100 duration-300'
        onClick={handleActive}
      >
        {idioma}
      </button>
    </>
  );
};
