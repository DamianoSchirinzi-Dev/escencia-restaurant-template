"use client";
import Image from "next/image";
import Bar from "../public/images/Bar.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomePageReservationBlock = () => {
  const router = useRouter();

  const handleReservationRedirect = () => {
    router.push("/reservations");
  };

  return (
    <div className="flex flex-col w-full">
      <Image
        className="object-cover w-full"
        src={Bar}
        alt="Escencia's bar lit up!"
      />
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={handleReservationRedirect}
        className="px-10 py-24 text-6xl font-light text-center md:py-40 font-PlayfairDisplay"
      >
        Make a <strong className="underline">Reservation</strong>
      </motion.button>
    </div>
  );
};

export default HomePageReservationBlock;
