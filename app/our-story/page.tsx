"use client";
import ChefsCooking from "../../public/images/chefs-cooking.jpg";
import Vineyard from "../../public/images/Vineyard.png";
import Image from "next/image";
import HomePageReservationBlock from "@/components/HomePageReservationBlock";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <div className="mx-0 bg-custom_light_bg">
      <div className="relative h-screen">
        <Image
          className="object-cover w-full h-full brightness-75"
          src={ChefsCooking}
          alt="Escencia's bar lit up!"
        ></Image>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute w-full pb-24 text-6xl text-center text-gray-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-PlayfairDisplay lg:text-7xl"
        >
          Our Story
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full px-6 py-12 text-sm font-light text-center sm:px-20 md:px-40 lg:px-72 xl:px-96"
      >
        <h1 className="px-6 pt-2 pb-8 text-2xl font-PlayfairDisplay">
          The Tale of Escencia: A Culinary Odyssey
        </h1>
        <div className="flex flex-col gap-6">
          <p>
            Long ago, in a quaint village nestled within the picturesque
            landscapes of Spain, the story of Escencia began. The village, known
            for its vibrant culture and deep-rooted traditions, was home to
            families whose lives revolved around the kitchen. Generations shared
            stories, laughter, and the love of authentic cuisine that had been
            cherished for centuries.
          </p>
          <p>
            At the heart of this village was Isabella, a spirited and gifted
            cook whose culinary creations had an almost magical ability to
            transport people through time and place with a single bite.
            Isabella's dishes were not just meals; they were gateways to the
            past, connecting people to their heritage, evoking forgotten
            memories, and forging new ones..
          </p>
        </div>
      </motion.div>

      <Image
        className="object-cover w-full h-full brightness-75"
        src={Vineyard}
        alt="Escencia's bar lit up!"
      ></Image>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col h-full gap-6 px-6 py-12 text-sm font-light text-center sm:px-20 md:px-40 lg:px-72 xl:px-96"
      >
        <p>
          As Isabella's reputation spread beyond the village, travelers from far
          and wide embarked on journeys to taste her creations. However,
          Isabella's humble kitchen could only accommodate so many. Recognizing
          the need to share the essence of her culinary heritage with the world,
          Isabella's family decided to embark on a new adventure.
        </p>
        <p>
          Guided by the spirit of preserving tradition and igniting innovation,
          they established "Escencia" in a bustling city, far from their village
          but close to their hearts. The restaurant became a tribute to
          Isabella's legacy and the culinary treasures of Spain. The walls
          adorned with photographs and artifacts from their village, the scent
          of saffron and rosemary wafting through the air, Escencia quickly
          became a sanctuary where stories were woven into every dish.
        </p>
        <p>
          The restaurant's menu was a carefully curated tapestry, each dish
          reflecting the history and passion of generations. From the famous
          paella, inspired by the golden shores of Isabella's hometown, to the
          hearty gazpacho that paid homage to scorching summers and cool
          evenings, every recipe carried the soul of the land and its people.
        </p>
        <p>
          Escencia not only brought the flavors of Spain to a wider audience but
          also became a gathering place where people came to celebrate, share,
          and connect. As time passed, the restaurant grew, and its family
          expanded to include not only the owners but also every individual who
          walked through its doors.
        </p>
        <p>
          And so, the tale of Escencia continues to unfold—a journey that began
          in a village's kitchen and evolved into a culinary odyssey. Today, the
          restaurant stands as a bridge between the past and the present, a
          place where authenticity and innovation dance together, and the
          essence of Spanish gastronomy is shared with all who seek it.
        </p>
      </motion.div>
      <HomePageReservationBlock />
    </div>
  );
}
