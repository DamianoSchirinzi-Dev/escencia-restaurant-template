import Image from "next/image";
import Instagram from "../public/images/Instagram.png";
import Facebook from "../public/images/Facebook.png";
import TikTok from "../public/images/TikTok.png";

const Footer = () => {
  return (
    <footer className="px-16 py-12 text-sm font-light text-white lg:flex-row lg:flex lg:justify-between bg-custom_dark_bg lg:py-4">
      <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left lg:gap-24">
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
      <div className="flex flex-row justify-center gap-6 pt-6 lg:flex-col lg:gap-0">
        <Image src={Instagram} alt="Instagram logo" />
        <Image src={Facebook} alt="Facebook logo" />
        <Image src={TikTok} alt="Tiktok logo" />
      </div>
    </footer>
  );
};

export default Footer;
