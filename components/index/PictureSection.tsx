import Image from "next/image";
import { toastImg } from "../data";
type Props = {};

const PictureSection = (props: Props) => {
  return (
    <>
      <h2 className="text-center text-4xl mt-1">Some Pictures of Me:</h2>
      <div className="flex flex-row flex-wrap justify-center my-4 mx-auto max-lg:mx-4">
        {toastImg.map((image, index) => (
          <Image className="icon-default rounded-lg" src={image.src} alt={image.alt} key={`pic${index}`} />
        ))}
      </div>
    </>
  );
};

export default PictureSection;
