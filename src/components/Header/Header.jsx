import Navbar from "./Navbar";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

export default function Header(){
    return(
        <header className="flex flex-row px-[80px] items-center bg-[#FFFFFF]">
            
            <img src={logo}  alt="logo" />
            <span className="font-[DM_Serif_Display] text-[36px] pr-[96px]">LunAroma</span>

            <Navbar/>
            
             <div className="flex gap-[40px] font-[16px] absolute right-[80px]">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
                <FontAwesomeIcon icon={faHeart} className="text-lg" />
                <FontAwesomeIcon icon={faUser} className="text-lg" />
            </div>
        </header>
    )
}