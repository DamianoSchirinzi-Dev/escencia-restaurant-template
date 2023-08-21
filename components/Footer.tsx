import Image from "next/image";
import Instagram from "../public/images/Instagram.png";
import Facebook from "../public/images/Facebook.png";
import TikTok from "../public/images/TikTok.png";

const Footer = () => {
    return(
        <footer className="py-12 text-sm font-light text-white bg-custom_dark_bg">
        <div className="flex flex-col items-center gap-4 text-center">
          <ul>
            <li>12 Playfair street</li>
            <li>M1 3JA</li>
            <li>Manchester</li>
          </ul>
          <ul>
            <li>0161 817 2018</li>
            <li>restaurant@escencia.co.uk</li>
          </ul>          
        </div>
        <div className="flex flex-row justify-center gap-6 pt-6">
          <Image src={Instagram} alt="Instagram logo"/>
          <Image src={Facebook} alt="Facebook logo"/>
          <Image src={TikTok} alt="Tiktok logo"/>
        </div>
      </footer>
    )
}

export default Footer;