import { isSliderOpen } from './MenuStore';

const NavBar = () => {

  const handleMouseLeave = () => {
    setTimeout(()=>{
      isSliderOpen.set(false);
    }, 1000)
  };

  return (
    <nav className="px-20 flex gap-4 relative">
      <div
        className="relative group"
        onMouseEnter={() => isSliderOpen.set(true)}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-[#FFF] font-[400] text-[18px] leading-[21.09px] hover:text-[#777] transition-colors ease-in-out delay-100 duration-300 cursor-pointer">
          Servicios
        </p>
      </div>
      <a
        className="text-[#FFF] font-[400] text-[18px] leading-[21.09px] hover:text-[#777] transition-colors ease-in-out delay-100 duration-300"
        href="#"
      >
        Acerca de nosotros
      </a>
      <a
        className="text-[#FFF] font-[400] text-[18px] leading-[21.09px] hover:text-[#777] transition-colors ease-in-out delay-100 duration-300"
        href="/es-ES/contactanos"
      >
        Contáctanos
      </a>
    </nav>
  );
};

export default NavBar;
