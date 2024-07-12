import pfp from "@/public/images/pfp.jpg";
import Image from "next/image";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div className="h-[25rem] grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2 max-md:h-[30rem]">
      <div className="mt-40 mr-10 mb-10 bg-neutral-800 rounded-r-3xl max-md:mt-10">
        <h1 className="text-center text-4xl m-5">About Me:</h1>
        <ul className="mt-10 w-max mx-5 mb-5 list-disc md:mr-10 md:ml-auto">
          <li className="w-max">
            I am <i>Danil N</i>, but my friends call me <code>Toaster</code>.
          </li>
          <li className="w-max">I am 20 y.o. Computer Science student.</li>
        </ul>
      </div>
      <div className="w-full content-center">
        <Image
          className="size-60 ml-24 mr-auto rounded-full outline outline-8 -outline-offset-4 outline-neutral-50"
          src={pfp}
          alt="Toaster's Profile Picture"
          priority={true}
          key={`pfpimg`}
        />
      </div>
    </div>
  );
};

export default AboutSection;
