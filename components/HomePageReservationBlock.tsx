import Image from "next/image";
import Bar from "../public/images/Bar.png"

const HomePageReservationBlock = () => {
  return (
    <div className="w-full">
      <Image className="object-cover w-full" src={Bar} alt="Escencia's bar lit up!" />
      <h1 className="px-10 py-24 text-6xl font-light text-center md:py-40 font-PlayfairDisplay">
        Make a <strong className="underline">Reservation</strong>
      </h1>
    </div>
  );
};

export default HomePageReservationBlock;