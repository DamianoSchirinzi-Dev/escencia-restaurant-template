import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import HamburgerImage from "../public/images/HamburgerMenuImage.png";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const handledRedirect = (href: string) => {
    router.push(href);
    setIsNavOpen(!isNavOpen);
  };

  const showPdf = () => {
    window.open("menus/dummy.pdf");
  };

  const genericHamburgerLine = `h-0.5 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  const variants = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="">
      <div
        className={`${
          isNavOpen
            ? "fixed z-40 top-3 right-6"
            : "fixed z-40 top-3 right-6 bg-black bg-opacity-60 rounded-md"
        }`}
      >
        <button
          className="flex flex-col items-center justify-center w-12 h-12"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isNavOpen
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isNavOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>

      {isNavOpen && (
        <motion.div
          variants={variants}
          animate={"show"}
          initial="hide"
          className="fixed top-0 left-0 z-30 flex w-full h-screen overflow-hidden bg-custom_dark_bg"
        >
          <Image
            className="hidden object-cover w-1/2 sm:block"
            src={HamburgerImage}
            alt="image of chef serving food"
          />

          <motion.ul className="flex flex-col items-center justify-center w-full h-full gap-12 text-3xl text-center text-white sm:w-1/2 font-PlayfairDisplay">
            <motion.li
              onClick={() => handledRedirect("/")}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Home
            </motion.li>
            <motion.button
              onClick={showPdf}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Menu
            </motion.button>
            <motion.button
              onClick={() => handledRedirect("/reservations")}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Reservations
            </motion.button>
            <motion.button
              onClick={() => handledRedirect("/our-story")}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >About us</motion.button>
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
}
