import { useStore } from '@nanostores/react';
import { isMenuOpen } from './MenuStore'


export const BurguerMenu = () => {

  const $isMenuOpen = useStore(isMenuOpen);

  if($isMenuOpen){
    return null
  }

  return (
    <div className=' group cursor-pointer' onClick={() => isMenuOpen.set(!$isMenuOpen)}>
      <span className=' block w-[35px] h-[3px] mb-[5px] bg-[#FFF] group-hover:bg-green-cumtual ease-in-out delay-100 transition-colors duration-200'></span>
      <span className='block w-[35px] h-[3px] mb-[5px] bg-[#FFF] group-hover:bg-green-cumtual ease-in-out delay-100 transition-colors duration-200'></span>
      <span className='block w-[35px] h-[3px] mb-[5px] bg-[#FFF] group-hover:bg-green-cumtual ease-in-out delay-100 transition-colors duration-200'></span>
    </div>
  )
}
