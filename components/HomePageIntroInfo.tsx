import BarStaff from "../public/images/BarStaff1.png";
import Seduction from "../public/images/IMG2.png";
import InfoBlock from "./InfoBlock";

const HomePageIntroInfo = () => {
  return (
    <div className="flex flex-col h-full gap-16 py-20 mx-8">
      <InfoBlock
        imageSource={BarStaff}
        headingText="Welcome to Esencia"
        bodyText="Where culinary passion and elegance blend in every dish. Immerse yourself in a unique gastronomic experience, where authentic flavors and creativity come together in harmony. Our team of expert chefs has meticulously designed each dish to delight your senses and take you on an unforgettable culinary journey. Enjoy an evening full of charm and flavor at Canva. Bon appétit!"
        alignImageLeft={false}
      />
      <InfoBlock
        imageSource={Seduction}
        headingText="An authentic Spanish Experience"
        bodyText="Immerse yourself in an unforgettable Spanish experience that
              celebrates the heart and soul of Spain's culinary heritage. Our
              meticulously crafted menu, curated by expert chefs from diverse
              regions of Spain, presents a vibrant tapestry of flavors and
              techniques passed down through generations."
        alignImageLeft={true}
      />
    </div>
  );
};

export default HomePageIntroInfo;
