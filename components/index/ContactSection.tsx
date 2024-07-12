import Image from "next/image";
import { links } from "../data";
type Props = {};

const ContactSection = (props: Props) => {
  return (
    <>
      <h2 className="text-center text-4xl mt-1">Contact Me:</h2>
      <div className="flex flex-row flex-wrap justify-center my-4 mx-auto max-lg:mx-4">
        {links.map((linkimage, index) => (
          <a href={linkimage.link} target={linkimage.target} key={`link${index}`}>
            <Image
              className="icon-default rounded-lg transition opacity-70 saturate-50 hover:saturate-100 hover:opacity-100"
              src={linkimage.img.src}
              alt={linkimage.img.alt}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default ContactSection;
