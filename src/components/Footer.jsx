import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return(
    <footer className="relative font-[DM_Sans] flex flex-col bg-[#FFFFFF] px-[80px] py-[12px] gap-[12px]">
        <div className="flex flex-row gap-[12px] text-[12px]">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
            <FontAwesomeIcon icon={faGoogle} className="text-pink-600" />
            <FontAwesomeIcon icon={faX} className="text-black" />
        </div>
        <p className=" font-[400] text-[14px]">Don't have an account? <span className="text-[#5298B7] cursor-pointer">Sign up</span></p>
    </footer>
    )
}