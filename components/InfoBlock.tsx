"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface InfoBlockData {
  imageSource: StaticImageData;
  headingText: string;
  bodyText: string;
  alignImageLeft: boolean;
}

const InfoBlock = (props: InfoBlockData) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center gap-10 md:items-start md:flex-row"
    >
      <Image
        className={`${
          props.alignImageLeft ? "object-cover md:order-1" : "object-cover"
        } rounded-sm`}
        src={props.imageSource}
        alt="Bar staff serving drinks"
      />
      <div className="mx-6 text-center sm:w-2/3 md:w-3/6 md:text-left lg:w-1/5">
        <hr className="my-4 h-0.5 border-t-0 bg-gray-800 opacity-100" />
        <h2 className="pt-2 pb-5 text-2xl font-PlayfairDisplay">
          {props.headingText}
        </h2>
        <p className="text-sm font-light">{props.bodyText}</p>
      </div>
    </motion.div>
  );
};

export default InfoBlock;
