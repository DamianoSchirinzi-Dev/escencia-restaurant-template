import Image from "next/image";
import TapasSpread from "@/public/images/TapasSpread.png";
import Exterior from "@/public/images/Exterior.png";
import { Extension } from "typescript";

export default function Reservation() {
  return (
    <div className="mx-0 bg-custom_light_bg">
      <div className="relative h-screen">
        <Image
          className="object-cover w-full h-full brightness-75"
          src={TapasSpread}
          alt="Escencia's bar lit up!"
        ></Image>

        <h1 className="absolute pb-24 text-6xl text-gray-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-PlayfairDisplay lg:text-7xl">
          Reservations
        </h1>
      </div>

      <div className="flex flex-col items-center h-full pt-12 mx-6 pb-14 lg:flex-row lg:gap-16 lg:justify-center">
        <Image className="" src={Exterior} alt="Bar staff serving drinks" />
        <div className="flex flex-col gap-8 pt-8 mx-6 font-light text-center lg:text-left">
          <div>
            <hr className="mx-6 my-4 h-0.5 border-t-0 bg-gray-800 opacity-100 lg:mx-0" />
            <h1 className="text-3xl font-PlayfairDisplay">Information</h1>
          </div>

          <div>
            <h2 className="pb-3 font-semibold">We are open:</h2>
            <p>Wednesday - Sunday</p>
            <p>Weekday open times: 10am - 10pm</p>
            <p>Weekend open times: 12pm - 11pm</p>
          </div>

          <div>
            <h2 className="pb-3 font-semibold">Find us:</h2>
            <p>12 Playfair street, M1 3JA, Manchester</p>
            <p>We are located on the corner of Spinningfield Towers.</p>
          </div>

          <div className="pb-4">
            <h2 className="pb-3 font-semibold">Contact us:</h2>
            <p>0161 817 2018</p>
            <p>restaurant@escencia.co.uk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
