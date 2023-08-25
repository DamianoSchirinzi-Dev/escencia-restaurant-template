
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
      <h1 className="absolute pb-24 text-gray-100 -translate-x-1/2 -translate-y-1/2 text-7xl top-1/2 left-1/2 font-PlayfairDisplay">
        Escencia
      </h1>
    </div>
  );
};

export default HomePageBanner;
