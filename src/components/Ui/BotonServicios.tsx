
interface Props {
  width: string;
  height: string;
  texto: string;
  icono: JSX.Element;
}

export const BotonServicios = ({ width, height, texto, icono }: Props) => {
  return (
    <div className="bg-[#353536] rounded-[9px]" style={{ width, height }}>
      {icono}
      <p className="font-[600] text-[#FFF] text-[15.46px]">{texto}</p>
    </div>
  );
};
