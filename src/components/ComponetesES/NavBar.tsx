import { isSliderOpen } from './MenuStore';

interface NavBarProps {
  idioma: string
}


const NavBar = ({ idioma }: NavBarProps) => {

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
          {idioma === 'es' ? 'Servicios' : 'Services'}
        </p>
      </div>
      <a
        className="text-[#FFF] font-[400] text-[18px] leading-[21.09px] hover:text-[#777] transition-colors ease-in-out delay-100 duration-300"
        href={idioma === 'es' ? "/es-MX/acerca-de-nosotros" : "/en-US/about-us"}
      >
        {idioma === 'es' ? 'Acerca de nosotros' : 'About us'}
      </a>
      <a
        className="text-[#FFF] font-[400] text-[18px] leading-[21.09px] hover:text-[#777] transition-colors ease-in-out delay-100 duration-300"
        href={idioma === 'es' ? "/es-MX/contactanos" : "/en-US/contact-us"}
      >
        {idioma === 'es' ? 'Contáctanos' : 'Contact us'}
      </a>
    </nav>
  );
};

export default NavBar;
