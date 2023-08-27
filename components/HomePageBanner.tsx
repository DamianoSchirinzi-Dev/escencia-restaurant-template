"use client"
import {motion} from "framer-motion"

const HomePageBanner = () => {
  return (
    <div className="relative h-screen">
      <video
        className="object-cover w-full h-full brightness-50"
        poster="images/VideoThumbnail1.png"
        autoPlay={true}
        loop={true}
        muted={true}
        width="1920"
        playsInline={true}
    >
        <source src="videos/EscenciaLandingPageVideo.mp4" type="video/mp4" />
      </video>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="absolute pb-24 text-gray-100 -translate-x-1/2 -translate-y-1/2 text-7xl top-1/2 left-1/2 font-PlayfairDisplay">
        Escencia
      </motion.h1>
    </div>
  );
};

export default HomePageBanner;
