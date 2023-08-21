import Image from "next/image";
import VideoThumbnail1 from "../public/images/VideoThumbnail1.png";
import Video from "../public/images/Facebook.png";

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
    >
        <source src="videos/EscenciaLandingPageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="absolute pb-24 text-white -translate-x-1/2 -translate-y-1/2 text-7xl top-1/2 left-1/2 font-PlayfairDisplay">
        Escencia
      </h1>
    </div>
  );
};

export default HomePageBanner;
