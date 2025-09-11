import Parellex from "./Parellex";
import MobileHero from "./MobileHero";









export default function Slider() {


  return (


    <>

      <div className="sm:block hidden">
        <Parellex />
      </div>


      <div className="sm:hidden block">
        <MobileHero />
      </div>
    
    </>

  );
}
