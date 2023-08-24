import HomePageBanner from "@/components/HomePageBanner";
import HomePageIntroInfo from "@/components/HomePageIntroInfo";
import HomePageReservationBlock from "@/components/HomePageReservationBlock";


export default function Home() {
  return (
    <main className="m-0 bg-custom_light_bg">
      <HomePageBanner />
      <HomePageIntroInfo />
      <HomePageReservationBlock />
    </main>
  );
}
