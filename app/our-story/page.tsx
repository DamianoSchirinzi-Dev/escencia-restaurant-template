import ChefsCooking from "../../public/images/chefs-cooking.jpg";
import Image from 'next/image';

export default function OurStory() {
  return (
    <div className="mx-0 bg-custom_light_bg">
      <div className="relative h-screen">
        <Image
          className="object-cover w-full h-full brightness-75"
          src={ChefsCooking}
          alt="Escencia's bar lit up!"
        ></Image>

        <h1 className="absolute pb-24 text-6xl text-gray-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-PlayfairDisplay lg:text-7xl">
          Our Story
        </h1>
      </div>
    </div>
  );
}
