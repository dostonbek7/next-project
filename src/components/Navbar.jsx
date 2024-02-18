import Logo from "../assets/Logo.svg";
import Profil from "../assets/profil.png";
import Image from "next/image";
import Theme from "./Theme";

function Navbar() {
  return (
    <div className="flex items-center lg:rounded-tr-3xl lg:rounded-br-3xl lg:flex-col justify-between bg-[#373B53] pr-6 md:pr-8 lg:pr-0 lg:pb-6">
      <div className="bg-image pt-[22px] pb-[23px] px-[22px] md:px-[25px] md:py-[25px] lg:px-9 lg:py-9">
      <Image src={Logo} alt="Logo image" />
      </div>
      <div className="flex items-center gap-6 md:gap-[34px] lg:flex-col">
        <Theme/>
        <hr className="bg-[#494E6E] w-[1px] h-[72px] lg:h-[1px] lg:w-[103px]"/>
        <Image src={Profil} alt="Profil image" className="rounded-full md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </div>
    </div>
  );
}

export default Navbar;
