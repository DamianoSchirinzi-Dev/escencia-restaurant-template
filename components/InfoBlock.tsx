import Image, { StaticImageData } from "next/image";

interface InfoBlockData {
  imageSource: StaticImageData;
  headingText: string;
  bodyText: string;
}

const InfoBlock = (props: InfoBlockData) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Image
        className="object-cover"
        src={props.imageSource}
        alt="Bar staff serving drinks"
      />
      <div className="mx-6 text-center">
        <hr className="my-4 h-0.5 border-t-0 bg-gray-800 opacity-100" />
        <h2 className="pt-2 pb-5 text-2xl font-PlayfairDisplay">
          {props.headingText}
        </h2>
        <p className="text-sm font-light">{props.bodyText}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
