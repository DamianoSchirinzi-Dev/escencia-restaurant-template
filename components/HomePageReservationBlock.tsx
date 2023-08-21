import Image from "next/image";
import Bar from "../public/images/Bar.png"

const HomePageReservationBlock = () => {
  return (
    <div className="w-full">
      <Image className="object-cover" src={Bar} alt="Escencia's bar lit up!" />
      <h1 className="py-20 text-6xl font-light text-center font-PlayfairDisplay">
        Make a <strong className="underline">Reservation</strong>
      </h1>
    </div>
  );
};

export default HomePageReservationBlock;