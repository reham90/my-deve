import { NavDisplay } from "../../common/Navbars/headerNavbar/NavDisplay";
import SocialBar from "../../common/Navbars/SocialBar/SocialBar";
import { useTranslation } from 'react-i18next';

const NavBar =() =>{
    return(
        <>
        <div>
            <SocialBar/>
            <NavDisplay/>
        </div>
        </>
    )
}

export {NavBar};