import Image from "next/image";
import { stackImg } from "../data";

type Props = {};

const StackSection = (props: Props) => {
  return (
    <>
      <h2 className="text-center text-4xl mt-1">My Stack:</h2>
      <div id="carousel" className="w-max pt-8 -z-10 max-xl:pt-4">
        <div className="carousel-primary">
          {stackImg.map((image, index) => (
            <Image
              src={image.src}
              alt={image.alt}
              className="carousel-img icon-default mx-2 max-xl:w-24 max-sm:w-20 max-sm:mx-1"
              key={`stack1${index}`}
            />
          ))}
        </div>
        <div className="carousel-secondary">
          {stackImg.map((image, index) => (
            <Image
              src={image.src}
              alt={image.alt}
              className="carousel-img icon-default mx-2 max-xl:w-24 max-sm:w-20 max-sm:mx-1"
              key={`stack2${index}`}
            />
          ))}
        </div>
      </div>
      <p className="h-48 carousel-cover z-10 mb-8 max-xl:h-24 max-xl:mb-4"> </p>
    </>
  );
};

export default StackSection;
